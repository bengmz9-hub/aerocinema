# Estado del Proyecto — Progress Log (Listo para Nuevo Chat)

**Última actualización:** 2026-07-26 (Sprint 3)
**Estado:** ✅ Servidor local activo. Trabajando en local — sin push/deploy.
**Regla de Oro Permanente:** 🛑 **STRICTLY LOCAL** — Cero despliegue sin confirmación explícita.

---

## 1. Sesión Actual — Resumen Completo

### Cambios realizados esta sesión (reparación formulario):

| # | Cambio | Archivos |
|---|--------|----------|
| 1 | **CSP ampliado** — `'unsafe-eval'` + `connect-src 'self' ws:` en Content-Security-Policy (el CSP restrictivo bloqueaba `eval()` necesario para hidratación React) | `next.config.mjs` |
| 2 | **ContactModal reescrito sin Framer Motion** — Animaciones CSS nativas (`animate-blur-in`) reemplazan a Framer Motion (que interfería con clicks vía `specular-card::before`) | `ContactModal.tsx` |
| 3 | **Fix a11y en modal overlay** — `onKeyDown` añadido para cumplir Biome `useKeyWithClickEvents` | `ContactModal.tsx` |
| 4 | **Diagnóstico y limpieza** — Página `/test` creada y eliminada tras confirmar hidratación React; `force-dynamic` añadido y revertido (no era necesario tras arreglar CSP) | `app/test/`, `app/page.tsx` |

### Archivos modificados:
- `next.config.mjs` — CSP headers
- `src/components/sections/ContactModal.tsx` — Sin Framer Motion, animaciones CSS nativas, fix a11y
- `.project-map.md` — Regenerado automáticamente

---

## 2. Decisiones de la Sesión

- **Causa raíz del formulario roto:** CSP bloqueaba `eval()` (necesario para HMR y bundles en dev mode). React no hidrataba ningún componente cliente.
- **Framer Motion eliminado del modal:** no causaba la rotura principal pero interfería con clicks del tool de testing. Mantener el modal con CSS nativo.
- **No hacer deploy del formulario:** sigue siendo stub (`submitContactForm` simula 1s y devuelve success). Conexión a email real pendiente para cuando Jose tenga datos.

---

## 3. Próximos 3 Pasos Prioritarios

1. 🎯 **Conectar formulario de contacto a email real** (Resend/SendGrid vía `process.env.EMAIL_API_KEY`)
2. 🎯 **Número WhatsApp real y enlace funcional** cuando Jose tenga su número oficial
3. 🎥 **Sustituir placeholders de vídeos e imágenes** por los reels y trabajos reales de Jose en L'Hospitalet / Barcelona

---

## 4. Para el Nuevo Chat

```bash
# Reglas activas
.agents/AGENTS.md (no pushes sin trigger)
.agents/rules/consultation-workflow.md (todo = consulta técnica)

# Dev server corriendo
Local: http://localhost:3000
```
