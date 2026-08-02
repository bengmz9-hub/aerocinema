#!/usr/bin/env bash
# Audit script — invocable desde Hermes antes de commitear
# Uso: bash .hermes/audit-precommit.sh [path]
# Si no se pasa path, usa . (raíz del proyecto)

target="${1:-.}"
warnings=0

echo "🔍 Pre-commit audit en ${target}..."

find "$target" \( -name '*.ts' -o -name '*.tsx' -o -name '*.js' -o -name '*.jsx' \) \
  -not -path '*/node_modules/*' -not -path '*/.next/*' -not -path '*/dist/*' \
  -not -path '*/build/*' 2>/dev/null | while IFS= read -r file; do

  # console.log
  matches=$(grep -nE 'console\.(log|warn|error|debug)' "$file" 2>/dev/null || true)
  if [ -n "$matches" ]; then
    echo "⚠  ${file}: console.log/warn/error/debug"
    while IFS= read -r line; do echo "   → $line"; done <<< "$matches"
    warnings=$((warnings + 1))
  fi

  # TODO/FIXME
  matches=$(grep -nE '(TODO|FIXME|HACK|XXX|BUG)' "$file" 2>/dev/null || true)
  if [ -n "$matches" ]; then
    echo "⚠  ${file}: TODO/FIXME/HACK"
    while IFS= read -r line; do echo "   → $line"; done <<< "$matches"
    warnings=$((warnings + 1))
  fi

  # debugger
  matches=$(grep -nE 'debugger' "$file" 2>/dev/null || true)
  if [ -n "$matches" ]; then
    echo "⚠  ${file}: debugger statement"
    while IFS= read -r line; do echo "   → $line"; done <<< "$matches"
    warnings=$((warnings + 1))
  fi

  # : any
  matches=$(grep -nE ':\s*any' "$file" 2>/dev/null || true)
  if [ -n "$matches" ]; then
    echo "⚠  ${file}: :any usage"
    while IFS= read -r line; do echo "   → $line"; done <<< "$matches"
    warnings=$((warnings + 1))
  fi

  # secrets
  matches=$(grep -nEi '(api[_-]?key|API[_-]?KEY|secret|SECRET|password|PASSWORD)' "$file" 2>/dev/null || true)
  if [ -n "$matches" ]; then
    echo "🚫 ${file}: posible secreto hardcodeado"
    while IFS= read -r line; do echo "   → $line"; done <<< "$matches"
    warnings=$((warnings + 1))
  fi
done

echo ""
if [ "$warnings" -gt 0 ]; then
  echo "⚠  $warnings advertencia(s) — revisa antes de commitear"
  echo "   Para forzar: git commit --no-verify"
else
  echo "✅ Audit limpio"
fi
