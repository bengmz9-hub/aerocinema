# Estado del Proyecto — Progress Log (Listo para Nuevo Chat)

**Última actualización:** 2026-07-26 (Sprint 3)
**Estado:** ✅ Servidor local activo. Trabajando en local — sin push/deploy.
**Regla de Oro Permanente:** 🛑 **STRICTLY LOCAL** — Cero despliegue sin confirmación explícita.

---

## 1. Sesión Actual — Resumen Completo (Sesión 2026-07-26 - Sprint 2)

### Cambios realizados este sprint (sesión anterior):
| # | Cambio | Archivos |
|---|--------|----------|
|| 1 | **Spaciado "en mente ?"** | `ContactSection.tsx` |
|| 2 | **Footer rediseñado Opción C** | `page.tsx` |
|| 3 | **Paleta Gold unificada (`gold-50` a `gold-900`)** | `globals.css` |
|| 4 | **Reemplazo global `amber-XXX` → `gold-XXX`** | 13 archivos .tsx |
|| 5 | **Instagram link unificado** | `page.tsx` |
|| 6 | **Sombras rgba actualizadas** | 7 archivos + globals.css |
|| 7 | **DESIGN.md sincronizado** | `DESIGN.md` |
|| 8 | **Graphify actualizado** | `graphify-out/` |
|| 9 | **CookieBanner.tsx** | `CookieBanner.tsx`, `page.tsx` |

### Cambios de esta sesión (infraestructura local):
| # | Cambio | Detalle |
|---|--------|---------|
|| 10 | **Fix useParams() cast** — runtime check en vez de `as string` | `portfolio/[category]/page.tsx` |
|| 11 | **CSP headers añadidos** — Content-Security-Policy en next.config.mjs | `next.config.mjs` |
|| 12 | **OpenCode CLI instalado** — v1.18.5, delegación de código local | `npm i -g opencode-ai` |
|| 13 | **Ollama + 4 modelos locales** — qwen2.5-coder:14b (código), gemma4:12b-it-qat (research/tex), deepseek-r1:14b (razonamiento), llava:13b (visión) | `ollama pull` |
|| 14 | **gpt-researcher + markitdown instalados** — investigación web local + conversión documentos | `pip install` |
|| 15 | **Rust instalado** — dependencia para litellm | `winget install Rustlang.Rustup` |
|| 16 | **Skill local-coding-agents actualizado** — tabla de delegación autónoma | SKILL.md |
| | 17 | **Code review con qwen2.5-coder:14b** — auditoría local de src/ (0 tokens API) | 11 archivos TSX/TS/CSS |
| | 18 | **Regenerado .project-map.md** — eliminado ruido de `.agents/` | `.project-map.md` |
| | 19 | **tsconfig.tsbuildinfo → .gitignore** — build cache ya no trackeado | `.gitignore` |
| | 20 | **Graphify actualizado** — 3031 nodos, 6763 edges, 158 comunidades | `graphify-out/` |

---

## 2. Decisiones de la Sesión

- **Footer Opción C** (híbrido 3 columnas con jerarquía premium) elegido sobre opciones Yummygum y Object & Archive
- **Paleta gold unificada** de las bentogrids del DJI Mini 5 Pro (`#dfd0a4`) aplicada a toda la web, reemplazando `amber-XXX`
- **Banner de Cookies minimalista** implementado e integrado con estética oscura/dorada.
- **Sync Hermes Agent / DeepSeek V4 Pro** compartiendo workspace local mediante commits Git.
- **No tocar email/WhatsApp** hasta que web activa y Jose tenga datos reales.
- **OpenCode + Ollama como agentes locales** para código y procesamiento mecánico sin pérdida calidad.
- **Qwen 2.5 Coder 14B** para código, **Gemma 4 12B QAT** para investigación, **LLaVA 13B** para visión.
- **DeepSeek API siempre** para respuestas, diseño, debugging, decisiones. Solo local si pérdida CERO garantizada.
- **Flujo diseño automatizado**: popular-web-designs → OpenCode + gemma4:12b-it-qat (research local, 0 tokens). DeepSeek solo diseño final.
- **Agentes locales por tarea**: gemma4 (diseño/estética), qwen2.5-coder (código), deepseek-r1 (razonamiento), llava (visión).

---

## 3. Próximos 3 Pasos Prioritarios

1. 🎯 **Conectar formulario de contacto a email real** (Resend/SendGrid vía `process.env.EMAIL_API_KEY`)
2. 🎯 **Número WhatsApp real y enlace funcional** cuando Jose tenga su número oficial
3. 🎥 **Sustituir placeholders de vídeos e imágenes** por los reels y trabajos reales de Jose en L'Hospitalet / Barcelona

---

## 4. Para el Nuevo Chat

```bash
# Archivos a cargar primero
read_file progress.md
read_file DESIGN.md
cargar skill: drones-project-reference
cargar skill: local-coding-agents  # ← NUEVO: tabla delegación autónoma

# Reglas activas
.agents/AGENTS.md (no pushes sin trigger)
.agents/rules/consultation-workflow.md (todo = consulta técnica)
.agents/rules/graphify.md (usar grafo)

# Dev server corriendo en segundo plano
# Local: http://localhost:3000
```
