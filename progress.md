# Estado del Proyecto — Progress Log (Listo para Nuevo Chat)

**Última actualización:** 2026-07-26 (Sprint 4)
**Estado:** ✅ Servidor local activo. Trabajando en local — sin push/deploy.
**Rama:** `feat/design-system-v2` (commit 9e104c0)

---

## 1. Sesión Actual — Resumen Completo (2026-07-26 Sprint 4)

### ✅ Completado

| Área | Detalle |
|------|---------|
| **Tipografía** | 3 fuentes: Cinzel (H1/H2 display), Cormorant (H3/subtítulos), Jakarta (body/UI). Montserrat y Geist eliminados. Negative letter-spacing en headings |
| **Botones** | Sistema unificado: `btn-primary`, `btn-secondary`, `btn-gold` + tamaños `btn-sm/md/lg`. Specular eliminado de botones |
| **Paleta** | Cian UI → Gold. Cian mantenido solo en telemetría (GPS dot + reticle) |
| **ServicesSection** | Cards ahora visibles siempre (animación CSS blurIn, sin observer JS) |
| **WhatsAppButton** | `<button>` → `<a>` funcional con href WhatsApp |
| **local_agent.py** | Script para delegar a Ollama local (4 modelos: code/text/reason/vision) |
| **Delegación** | Regla ETERNA: delegar SIEMPRE a local_agent.py antes de tocar nada |

### 🐛 Bugs conocidos

| Bug | Estado |
|-----|--------|
| ContactModal no abre | 🔴 Pre-existente — no causado por cambios de esta sesión |
| Dev server .next cache se corrompe | ⚠️ Usar `npx next dev` en vez de `npm run dev` |

### 📂 Archivos modificados (commit 9e104c0)

19 archivos, 810+ / 180- (ver `git diff HEAD~1 --stat`)

---

## 2. Para el Nuevo Chat

```bash
# Cargar primero
read_file progress.md
skill_view: drones-project-reference
skill_view: local-coding-agents
skill_view: local-agent-runner

# Dev server
npx next dev  # (NO npm run dev, borra .next)

# Delegar
python local_agent.py "tarea" --model code --files src/Archivo.tsx
```

### Reglas activas
- `.agents/AGENTS.md`
- `.agents/rules/consultation-workflow.md`
- `.agents/rules/graphify.md`
- Delegar SIEMPRE a local_agent.py primero, luego revisar
- Patch tool desalinea tabs en Windows — preferir write_file
