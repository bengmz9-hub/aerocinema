#!/usr/bin/env python3
"""
local_agent.py — Agente local multi-modelo con seleccion AUTOMATICA.

Uso:
  python local_agent.py "arregla el bug en AuthContext" --files src/auth.tsx
  python local_agent.py "hero section con gradiente gold"

  # Forzar modelo explicitamente (solo si quieres):
  python local_agent.py "tarea" --model moe
  python local_agent.py "describe" --model vision --image captura.png
"""

import httpx, sys, os, re, argparse, socket, time, subprocess
from pathlib import Path

PROJECT = Path(__file__).parent.resolve()
OLLAMA_URL = "http://localhost:11434/api/chat"
LLAMA_URL = "http://localhost:8081/v1/chat/completions"
OLLAMA_BIN = r"C:\Users\rgs84\AppData\Local\Programs\Ollama\ollama.exe"

# Paths for auto-launching llama-server (Qwen 3.6 35B A3B MoE)
LLAMA_SERVER = r"C:\Users\rgs84\llama-models\llama-cuda\llama-server.exe"
LLAMA_MODEL = r"C:\Users\rgs84\llama-models\Qwen3.6-35B-A3B-UD-Q4_K_XL.gguf"

# Track spawned processes for cleanup
_spawned = {"ollama": None, "llama": None}

# Configuracion de modelos
MODELS = {
    "moe":    {"model": "Qwen3.6-35B-A3B-UD-Q4_K_XL", "num_ctx": 65536, "label": "35B MoE ~94 tok/s SWE-bench 73.4%",
               "url": LLAMA_URL, "backend": "llama"},
    "code":   {"model": "qwen2.5-coder:14b",         "num_ctx": 32768,  "label": "14B code 65 tok/s (fallback)"},
    "codex":  {"model": "qwen2.5-coder:14b",         "num_ctx": 65536,  "label": "14B code sesion larga (fallback)"},
    "text":   {"model": "gemma4:12b-it-qat",         "num_ctx": 65536,  "label": "12B copy/texto general"},
    "reason": {"model": "deepseek-r1:14b",            "num_ctx": 32768,  "label": "14B debug/razonamiento"},
    "vision": {"model": "qwen3-vl:8b",                  "num_ctx": 4096,   "label": "8B vision/imagenes"},
}

def detect_model(task, files, image):
    """Elige el mejor modelo segun la tarea."""
    t = task.lower()

    if image:
        return "vision"

    # Depuracion / errores / por que
    if any(w in t for w in ["bug", "debug", "error", "arregla", "por que", "why",
                            "fix", "issue", "problema", "traceback", "falla"]):
        return "reason"

    # Copywriting / textos
    if any(w in t for w in ["copy", "texto", "eslogan", "descripcion", "escribe un",
                            "hero", "landing", "titulo", "parrafo", "cta", "copia"]):
        return "text"

    # Todo lo demas (coding, archivos, cualquier tarea) → MoE
    return "moe"


def ensure_ollama():
    """Arranca Ollama si no está ya en :11434."""
    if _spawned["ollama"] is not None:
        if _spawned["ollama"].poll() is None:
            return True
        _spawned["ollama"] = None

    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        s.connect(("127.0.0.1", 11434))
        s.close()
        return True
    except:
        pass
    finally:
        s.close()

    print("[ollama] Arrancando servidor...", file=sys.stderr)
    _spawned["ollama"] = subprocess.Popen(
        [OLLAMA_BIN, "serve"],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        creationflags=subprocess.CREATE_NO_WINDOW if hasattr(subprocess, 'CREATE_NO_WINDOW') else 0
    )

    deadline = time.time() + 15
    while time.time() < deadline:
        try:
            r = httpx.get("http://localhost:11434/api/tags", timeout=2)
            if r.status_code == 200:
                print(f"[ollama] Listo en {time.time() - (deadline - 15):.1f}s", file=sys.stderr)
                return True
        except:
            pass
        time.sleep(1)
    print("[ollama] ERROR: No arrancó en 15s", file=sys.stderr)
    return False

def ensure_llama_server():
    """Arranca llama-server si no está ya en :8081."""
    if _spawned["llama"] is not None:
        if _spawned["llama"].poll() is None:
            return True
        _spawned["llama"] = None

    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        s.connect(("127.0.0.1", 8081))
        s.close()
        return True
    except:
        pass
    finally:
        s.close()

    print("[llama-server] Arrancando Qwen 35B MoE en :8081...", file=sys.stderr)
    _spawned["llama"] = subprocess.Popen(
        [LLAMA_SERVER, "-m", LLAMA_MODEL,
         "--host", "127.0.0.1", "--port", "8081",
         "-ngl", "9999", "-ncmoe", "6", "-c", "65536",
         "-b", "2048", "-ub", "1024",
         "-ctk", "f16", "-ctv", "f16", "--no-mmap",
         "-t", "8", "-tb", "16"],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
        creationflags=subprocess.CREATE_NO_WINDOW if hasattr(subprocess, 'CREATE_NO_WINDOW') else 0
    )

    deadline = time.time() + 60
    while time.time() < deadline:
        try:
            r = httpx.get("http://127.0.0.1:8081/v1/models", timeout=2)
            if r.status_code == 200:
                print(f"[llama-server] Listo en {time.time() - (deadline - 60):.1f}s", file=sys.stderr)
                return True
        except:
            pass
        time.sleep(1)
    print("[llama-server] ERROR: No arrancó en 60s", file=sys.stderr)
    return False

def stop_llama_server():
    """Descarga el MoE de VRAM matando llama-server."""
    proc = _spawned.get("llama")
    if proc and proc.poll() is None:
        proc.kill()
        proc.wait(timeout=5)
        _spawned["llama"] = None
        print("[llama-server] Desconectado de VRAM", file=sys.stderr)

def stop_ollama_model(model_name):
    """Descarga un modelo de VRAM en Ollama."""
    try:
        subprocess.run([OLLAMA_BIN, "stop", model_name],
                       capture_output=True, timeout=5)
    except:
        pass

def call_ollama(model, messages, num_ctx):
    if not ensure_ollama():
        return "Error: Ollama no pudo arrancar."
    payload = {
        "model": model,
        "messages": messages,
        "stream": False,
        "options": {"num_ctx": num_ctx, "temperature": 0.2}
    }
    resp = httpx.post(OLLAMA_URL, json=payload, timeout=180)
    resp.raise_for_status()
    content = resp.json()["message"]["content"]
    stop_ollama_model(model)
    return content

def call_llama(url, messages, max_tokens=4096):
    """Usa el MoE y luego lo descarga de VRAM."""
    if not ensure_llama_server():
        return "Error: llama-server no pudo arrancar."
    payload = {
        "model": "qwen",
        "messages": messages,
        "max_tokens": max_tokens,
        "temperature": 0.2,
        "stream": False
    }
    resp = httpx.post(url, json=payload, timeout=300)
    resp.raise_for_status()
    data = resp.json()
    content = data["choices"][0]["message"].get("content", "")
    stop_llama_server()
    return content

def read_files(paths):
    content = ""
    for p in paths:
        fp = PROJECT / p
        if fp.exists():
            content += f"\n--- {p} ---\n{fp.read_text(encoding='utf-8')}\n"
    return content

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("task", nargs="?", default="")
    parser.add_argument("--files", nargs="*", default=[])
    parser.add_argument("--model", default=None)  # None = auto-detect
    parser.add_argument("--image", default=None)
    args = parser.parse_args()

    # Auto-detectar modelo si no se especifico
    if args.model:
        model_key = args.model
    else:
        model_key = detect_model(args.task, args.files, args.image)
        print(f"[auto → {model_key} ({MODELS[model_key]['label']})]", file=sys.stderr)

    cfg = MODELS[model_key]

    # Leer archivos de contexto
    files_content = read_files(args.files)

    # Construir mensaje
    system_prompt = "Eres un asistente util. Responde en español."
    user_msg = args.task
    if files_content:
        user_msg = f"Contexto:\n{files_content}\n\nTarea:\n{args.task}"

    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_msg}
    ]

    if args.image:
        import base64
        img_path = Path(args.image)
        if img_path.exists():
            b64 = base64.b64encode(img_path.read_bytes()).decode()
            messages = [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": [
                    {"type": "image_url", "image_url": {"url": f"data:image/png;base64,{b64}"}},
                    {"type": "text", "text": args.task}
                ]}
            ]

    print(f"[{cfg['model']}] ctx={cfg['num_ctx']}...", file=sys.stderr)

    # Elegir backend: llama-server (OpenAI API) vs Ollama
    if cfg.get("backend") == "llama":
        response = call_llama(cfg["url"], messages, max_tokens=4096)
    else:
        response = call_ollama(cfg["model"], messages, cfg["num_ctx"])

    # Ejecutar bloques de codigo si los hay
    python_blocks = re.findall(r"```python\n(.*?)```", response, re.DOTALL)
    bash_blocks = re.findall(r"```bash\n(.*?)```", response, re.DOTALL)

    for i, block in enumerate(python_blocks):
        print(f"\n--- Ejecutando Python block {i+1} ---", file=sys.stderr)
        exec_locals = {"PROJECT": str(PROJECT)}
        try:
            exec(block.strip(), {"__builtins__": __builtins__}, exec_locals)
        except Exception as e:
            print(f"Error Python: {e}", file=sys.stderr)

    for i, block in enumerate(bash_blocks):
        print(f"\n--- Ejecutando bash block {i+1} ---", file=sys.stderr)
        os.system(f"cd {PROJECT} && {block.strip()}")

    # Mostrar respuesta si no hubo bloques ejecutables
    if not python_blocks and not bash_blocks:
        print(response)

if __name__ == "__main__":
    main()
