#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
adversarial_gate.py — Pre-gate adversarial de push para DRONES.

Revisa el diff de los commits a pushear (origin/main..HEAD) con el verificador
(DeepSeek API) contra los criterios del proyecto. Si el verificador detecta
problemas graves, bloquea el push (exit 1). Si todo va bien, deja pasar (exit 0).

Filosofia: VERIFICA, NO EDITA (respeta AGENTS.md: opciones A/B/C, no editar
sin confirmacion; el arreglo lo decide el humano o un loop adversarial con
criterio explicito).

- Rango por defecto: @{u}..HEAD (fallback: HEAD~1..HEAD)
- Solo revisa diffs de codigo: .ts .tsx .js .jsx .css .json (no docs)
- Fail-OPEN si la API no responde: avisa y deja pasar (un fallo de red no
  debe bloquear un push legitimo; el hook global ya cubre secrets+build).
- Los criterios de diseno viven en DESIGN.md / design-inspiration.md.

Uso:
  python scripts/adversarial_gate.py [--range ORIGIN..HEAD] [--max-chars 12000]
  (exit 0 = PASS / exit 1 = BLOQUEADO)
"""
import argparse
import json
import os
import subprocess
import sys
import urllib.request

DEEPSEEK_URL = "https://api.deepseek.com/chat/completions"
DEEPSEEK_MODEL = "deepseek-v4-flash"
ENV_PATH = os.path.expanduser(r"~/AppData/Local/hermes/profiles/charla/.env")
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

VERIFIER_SYS = (
    "Eres el VERIFICADOR de un pre-gate de push de un portfolio Next.js/TypeScript "
    "de fotografia/video aereo con drones (JF.DroneVision). Recibes el diff de un "
    "commit a pushear. Debes emitir SOLO un JSON: "
    '{"pass": true|false, "severity": "info"|"warn"|"block", "issues": [{"file": "...", "problem": "...", "why": "..."}], "summary": "..."}. '
    'pass=true SOLO si no hay problemas de severidad "block". '
    "Criterios BLOQUEANTES: errores logicos/bugs, TS invalido, romper el diseno "
    "definido (ver DESIGN.md: lamps doradas, secciones, tipografia, estetica dark), "
    "UI generica/AI slop, cambios que rompan datos (videos, rutas, servicios), "
    "codigo muerto o comentado. No bloquees por: nombres de variables, refactors "
    "cosmeticos sin riesgo, cambios de docs. Se preciso y cita el archivo."
)


def load_deepseek_key():
    if os.environ.get("DEEPSEEK_API_KEY"):
        return os.environ["DEEPSEEK_API_KEY"]
    if os.path.exists(ENV_PATH):
        with open(ENV_PATH, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line.startswith("DEEPSEEK_API_KEY="):
                    return line.split("=", 1)[1].strip().strip('"').strip("'")
    return None


def get_diff(diff_range):
    try:
        r = subprocess.run(
            ["git", "diff", diff_range, "--", "*.ts", "*.tsx", "*.js", "*.jsx", "*.css", "*.json"],
            cwd=REPO, capture_output=True, text=True, timeout=60,
        )
        return (r.stdout or "") if r.returncode == 0 else ""
    except Exception:
        return ""


def call_verifier(system, user, key):
    payload = {
        "model": DEEPSEEK_MODEL,
        "messages": [
            {"role": "system", "content": system},
            {"role": "user", "content": user},
        ],
        # Suficiente para que el razonamiento interno + la respuesta quepan;
        # con 2000 el reasoning de deepseek-v4-flash consume todo y content
        # llega vacio (validado 2026-08-02).
        "max_tokens": 6000,
        "temperature": 0.1,
    }
    req = urllib.request.Request(
        DEEPSEEK_URL,
        data=json.dumps(payload).encode(),
        headers={"Content-Type": "application/json", "Authorization": f"Bearer {key}"},
    )
    with urllib.request.urlopen(req, timeout=180) as r:
        data = json.loads(r.read().decode())
    msg = data["choices"][0]["message"]
    content = msg.get("content") or ""
    if not content.strip():
        raise RuntimeError("content vacio (reasoning consumio el presupuesto)")
    return content


def extract_json(text):
    text = text.strip()
    if text.startswith("```"):
        text = text.strip("`")
        if text.startswith("json"):
            text = text[4:]
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        pass
    start, end = text.find("{"), text.rfind("}")
    if start != -1 and end > start:
        try:
            return json.loads(text[start:end + 1])
        except json.JSONDecodeError:
            pass
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--range", default=None, help="Rango de diff (default: @{u}..HEAD)")
    ap.add_argument("--max-chars", type=int, default=14000)
    args = ap.parse_args()

    diff_range = args.range
    if diff_range is None:
        probe = subprocess.run(["git", "rev-parse", "@{u}"], cwd=REPO, capture_output=True, text=True)
        diff_range = "@{u}..HEAD" if probe.returncode == 0 else "HEAD~1..HEAD"

    diff = get_diff(diff_range)
    if not diff.strip():
        print("[gate] Sin diff de codigo en el rango — PASS")
        return 0
    if len(diff) > args.max_chars:
        print(f"[gate] Diff grande ({len(diff)} chars), recortando a {args.max_chars}...")
        diff = diff[:args.max_chars]

    key = load_deepseek_key()
    if not key:
        print("[gate] AVISO: sin DEEPSEEK_API_KEY — gate desactivado (fail-open)")
        return 0

    print(f"[gate] Verificando {diff_range} con {DEEPSEEK_MODEL}...")
    try:
        raw = call_verifier(
            VERIFIER_SYS,
            f"DIFF A REVISAR (commits {diff_range}):\n{diff}\n\n"
            "Evalua contra los criterios y devuelve el JSON de veredicto.",
            key,
        )
    except Exception as e:
        print(f"[gate] AVISO: verificador no respondio ({e}) — fail-open, no bloqueo")
        return 0

    verdict = extract_json(raw)
    if not verdict:
        print(f"[gate] AVISO: veredicto no parseable — fail-open\n{raw[:300]}")
        return 0

    passed = verdict.get("pass", False)
    severity = verdict.get("severity", "warn")
    issues = verdict.get("issues", [])
    summary = verdict.get("summary", "")

    if passed and severity != "block":
        print(f"[gate] PASS — {summary}")
        return 0

    print("[gate] BLOQUEADO por el verificador adversarial:")
    print(f"       {summary}")
    for i in issues:
        print(f"       - {i.get('file', '?')}: {i.get('problem', '')} ({i.get('why', '')})")
    print("\nSi es un falso positivo, pushea igual con: git push --no-verify")
    print("O aplica el arreglo y re-committea.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
