#!/usr/bin/env python3
"""Local Agent v3 — Usa Python para editar archivos (no sed, compatible con Windows)."""
import argparse, httpx, json, os, re, subprocess, sys, time

OLLAMA_URL = "http://localhost:11434/api/chat"
PROJECT = r"C:\Users\rgs84\DRONES"
MODELS = {
    "code": "qwen2.5-coder:14b",
    "text": "gemma4:12b-it-qat",
    "reason": "deepseek-r1:14b",
    "vision": "llava:13b",
}

def ask_ollama(model, messages, temperature=0.1, max_tokens=4096):
    resp = httpx.post(OLLAMA_URL, json={
        "model": model,
        "messages": messages,
        "stream": False,
        "options": {"temperature": temperature, "num_predict": max_tokens},
    }, timeout=300)
    resp.raise_for_status()
    return resp.json()["message"]["content"]

def read_file_snippet(rel_path, start=1, count=50):
    full = os.path.join(PROJECT, rel_path)
    if not os.path.exists(full):
        return "ERROR: %s not found" % rel_path
    with open(full, "r", encoding="utf-8") as f:
        lines = f.readlines()
    result = []
    for i, line in enumerate(lines[start-1:start-1+count], start=start):
        result.append("%6d\t%s" % (i, line.rstrip()))
    return "\n".join(result)

def apply_python_edit(code):
    try:
        exec_globals = {"PROJECT": PROJECT}
        exec(code, exec_globals)
        return {"exit": 0, "stdout": "OK"}
    except Exception as e:
        return {"exit": 1, "stderr": str(e)}

def run_bash(cmd):
    try:
        r = subprocess.run(
            ["bash", "-c", cmd],
            capture_output=True, text=True, timeout=30, cwd=PROJECT
        )
        return {"exit": r.returncode, "stdout": r.stdout.strip()[:500], "stderr": r.stderr.strip()[:500]}
    except subprocess.TimeoutExpired:
        return {"exit": -1, "stdout": "", "stderr": "TIMEOUT"}

def run_task(task, model, files=None):
    print("Local Agent: %s" % model)
    print("Task: %s" % task[:200])

    # Build file context
    file_context = ""
    if files:
        for f in files:
            snippet = read_file_snippet(f, 1, 80)
            file_context += "\n=== %s (lines 1-80) ===\n%s\n" % (f, snippet)
            full_path = os.path.join(PROJECT, f)
            if os.path.exists(full_path):
                with open(full_path, "r", encoding="utf-8") as fh:
                    total = len(fh.readlines())
                if total > 80:
                    end = read_file_snippet(f, total-30, 30)
                    file_context += "\n=== %s (lines %d-%d) ===\n%s\n" % (f, total-30, total, end)

    system = ("You are a code agent editing a Next.js project at %s.\n"
        "Rules:\n"
        "1. The file contents with line numbers are provided below.\n"
        "2. To edit files, use Python code in ```python blocks.\n"
        "3. Each edit should be a self-contained Python script:\n"
        "```python\n"
        "import os\n"
        "ruta = os.path.join(PROJECT, 'src/ruta/archivo.tsx')\n"
        "with open(ruta, 'r', encoding='utf-8') as f:\n"
        "    content = f.read()\n"
        "# Replace exact unique string\n"
        "content = content.replace('old exact text', 'new text')\n"
        "with open(ruta, 'w', encoding='utf-8') as f:\n"
        "    f.write(content)\n"
        "print('Done:', ruta)\n"
        "```\n"
        "4. To read more of a file: ```bash\\ncat -n src/file.tsx\\n```\n"
        "5. To verify changes: ```bash\\ngrep 'pattern' src/file.tsx\\n```\n"
        "6. The changes must be SURGICAL - replace only the exact lines needed.\n"
        "%s") % (PROJECT, file_context)

    start = time.time()
    response = ask_ollama(model, [
        {"role": "system", "content": system},
        {"role": "user", "content": task},
    ])
    elapsed = time.time() - start
    print("Response time: %.1fs" % elapsed)

    # Execute python edits
    py_blocks = re.findall(r'```python\n(.+?)```', response, re.DOTALL)
    bash_blocks = re.findall(r'```(?:bash|sh)\n(.+?)```', response, re.DOTALL)

    executed = 0
    for code in py_blocks:
        r = apply_python_edit(code.strip())
        icon = "+" if r["exit"] == 0 else "!"
        print("  %s [python edit]" % icon)
        if r.get("stderr"):
            print("     ERROR: %s" % r["stderr"][:300])
        executed += 1

    for block in bash_blocks:
        for line in block.strip().split('\n'):
            line = line.strip()
            if not line or line.startswith('#') or line.startswith('//'):
                continue
            r = run_bash(line)
            icon = "+" if r["exit"] == 0 else "!"
            print("  %s $ %s" % (icon, line[:120]))
            if r["stdout"]:
                print("     %s" % r["stdout"][:300])
            if r["stderr"]:
                print("     WARN: %s" % r["stderr"][:200])
            executed += 1

    if executed == 0:
        print("\nResponse:\n%s" % response[:1000])

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("task")
    parser.add_argument("--model", choices=["code", "text", "reason", "vision"], default="code")
    parser.add_argument("--files", nargs="*")
    parser.add_argument("--image", help="Ruta a imagen para modelos de vision")
    args = parser.parse_args()
    
    if args.model == "vision" and args.image:
        # Codificar imagen a base64 para llava
        import base64
        with open(args.image, "rb") as f:
            img_b64 = base64.b64encode(f.read()).decode()
        # Llamada directa con imagen
        resp = httpx.post(OLLAMA_URL, json={
            "model": MODELS["vision"],
            "messages": [{"role": "user", "content": args.task, "images": [img_b64]}],
            "stream": False,
            "options": {"temperature": 0.1},
        }, timeout=120)
        print("Vision Agent: llava:13b")
        print("Task: %s" % args.task[:200])
        print("Response:\n%s" % resp.json()["message"]["content"])
    elif args.model == "reason":
        print("Reasoning Agent: deepseek-r1:14b")
        resp = httpx.post(OLLAMA_URL, json={
            "model": MODELS["reason"],
            "messages": [{"role": "user", "content": args.task}],
            "stream": False,
            "options": {"temperature": 0.1, "num_predict": 4096},
        }, timeout=300)
        print("Task: %s" % args.task[:200])
        content = resp.json()["message"]["content"]
        print("Response:\n%s" % content)
    else:
        run_task(args.task, MODELS[args.model], args.files)
