# Estado del Proyecto — Progress Log (Listo para Nuevo Chat)

**Última actualización:** 2026-07-26 (Sprint 4)
**Estado:** ✅ Servidor local activo (`http://localhost:3000`). Trabajando en local — sin push/deploy.
**Regla de Oro Permanente:** 🛑 **STRICTLY LOCAL** — Cero despliegue sin confirmación explícita.

---

## 1. Sesión Actual — Resumen Completo

### Cambios realizados en esta sesión:

| # | Cambio | Archivos / Componentes |
|---|--------|------------------------|
| 1 | **Esmeralda → Dorado (#dfd0a4)** | `Navbar.tsx`, `ContactModal.tsx`, `ServicesSection.tsx`, `AboutMe.tsx`, `ColorGradingReel.tsx`, `ContactSection.tsx` |
| 2 | **Limpieza de Código Muerto** | Eliminado archivo huérfano `src/components/ui/StarBorder.tsx` |
| 3 | **Configuración OpenCode & DeepSeek API** | Integrada API Key de DeepSeek (`deepseek-chat`) en `opencode.jsonc` |
| 4 | **Optimización VRAM (RTX 4090)** | Detenidas instancias duplicadas de Ollama; liberados 18.5 GB de VRAM (bajada a 1.9 GB) |
| 5 | **Instalación y Configuración Aider** | Instalado `aider-chat 0.86.2` para flujo local con Ollama |
| 6 | **Regla 6 Permanente en AGENTS.md** | Delegación prioritaria de tareas a Hermes Agent con DeepSeek API (Flash / Pro v4) |

---

## 2. Decisiones de la Sesión

- **Delegación Principal:** Se usará **Hermes Agent con DeepSeek API** (DeepSeek V4 Flash para cambios rápidos / DeepSeek V4 Pro para razonamiento complejo).
- **Control por Antigravity:** Antigravity orquestará las órdenes hacia Hermes via CLI (`hermes chat -q "..."`) en segundo plano.
- **Formulario y Enlaces:** Formulario de contacto en `src/app/actions/contact.ts` y botón de WhatsApp listos a la espera de datos reales de Jose.

---

## 3. Próximos 3 Pasos Prioritarios

1. 🎯 **Revisión estética global en dorado** y refinamiento de secciones del landing page en `http://localhost:3000`.
2. 📱 **Número WhatsApp real y enlace funcional** cuando Jose tenga el número oficial.
3. 🎥 **Sustituir placeholders de vídeos e imágenes** por los reels y trabajos de Jose en Barcelona / L'Hospitalet.

---

## 4. Para el Nuevo Chat

```bash
# Reglas activas
.agents/AGENTS.md (Regla 6: Delegación preferente a Hermes + DeepSeek API)

# Dev server corriendo
Local: http://localhost:3000
```
