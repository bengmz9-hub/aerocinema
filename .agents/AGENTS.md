# DRONES — Deployment, Delegación & Entorno (Antigravity)

Proyecto: web portfolio en Next.js/TypeScript en `C:\Users\rgs84\DRONES`. Cambios visuales: respetar `DESIGN.md` y `design-inspiration.md` de la raíz.

1. **HERMES DELEGATION FIRST (OBLIGATORIO)**: Toda tarea, cambio de código o refactorización DEBE delegarse primero vía `hermes chat -q "..."` (`run_command`). PROHIBIDO editar código directamente sin ejecutar antes en Hermes CLI. El prompt de delegación debe ser SELF-CONTAINED: incluir rutas, estado actual y el criterio de aceptación (qué cuenta como "hecho") — Hermes arranca sesión limpia, sin contexto del proyecto.
2. **LOCAL ONLY & NO AUTO PUSH**: Prohibido `git push`, `vercel` o despliegues. Solo permitido si el usuario escribe exactamente: *"Ejecuta push de fin de sesión"*.
3. **NO EDICIÓN EN FEEDBACK/OPINIÓN**: Ante consultas/análisis, dar opciones (A/B/C). PROHIBIDO editar código sin confirmación explícita.
4. **NO FAKEAR DELEGACIÓN + VERIFICAR**: Si Hermes/OpenCode falla o requiere CLI interactivo, reportar estado o prompt. PROHIBIDO simular trabajo editando archivos localmente. Tras cada delegación, VERIFICAR el resultado (git diff, build, tests) contra el criterio de aceptación antes de reportar — no asumir que Hermes lo hizo bien.
5. **CERO TOKEN WASTE EN BACKGROUND**: Silenciar notificaciones automáticas de background/timers. No ejecutar herramientas ni responder a menos que el usuario lo pida explícitamente.
6. **ALERT CONTEXT ROT (12-15 TURNOS)**: Al alcanzar 12-15 turnos de conversación, avisar al usuario, generar/actualizar automáticamente `progress.md` con el estado y próximos pasos, e instruirle para abrir un chat limpio.
