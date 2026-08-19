# DRONES — Deployment, Delegación & Entorno (Antigravity)

Proyecto: web portfolio en Next.js/TypeScript en `C:\Users\rgs84\DRONES`. Cambios visuales: respetar `DESIGN.md` y `design-inspiration.md` de la raíz.

1. **DELEGACIÓN INTELIGENTE (HERMES / GEMINI FLASH)**:
   - **Tareas Ligeras / Simples:** Resolver DIRECTAMENTE con **Gemini 3.7 Flash (Low)** dentro de Antigravity (ediciones puntuales de 1-2 archivos, cambios de estilo, copy, tweaks menores). Prohibido gastar saldo de APIs externas en tareas triviales.
   - **Trabajo Agéntico / Complejo o Ahorro de Tokens:** Delegar vía `hermes chat -q "..."` (`run_command`) cuando la tarea requiera refactors multi-archivo, lógica agéntica pesada, o cuando quede poco uso/tokens en la sesión de Antigravity:
     * **Prioridad 1 (OFF-PEAK - Mitad de precio):** Usar **DeepSeek Flash v4 (`deepseek-v4-flash`)** siempre en horario off-peak (hora española UTC+2: **12:00 a 03:00** y **06:00 a 08:00**).
     * **Prioridad 2 (PICOS o Límite de Gemini):** Conmutar automáticamente a **Qwen 3.7 Flash (`qwen3.7-flash` / Alibaba API Key)** en franjas pico (hora española: **03:00 a 06:00** y **08:00 a 12:00**) o si DeepSeek no está disponible.
   - El prompt de delegación debe ser SELF-CONTAINED: incluir rutas, estado actual y criterio de aceptación.
2. **LOCAL ONLY & NO AUTO PUSH**: Prohibido `git push`, `vercel` o despliegues. Solo permitido si el usuario escribe exactamente: *"Ejecuta push de fin de sesión"*.
3. **NO EDICIÓN EN FEEDBACK/OPINIÓN**: Ante consultas/análisis, dar opciones (A/B/C). PROHIBIDO editar código sin confirmación explícita.
4. **NO FAKEAR DELEGACIÓN + VERIFICAR**: Si Hermes/OpenCode falla o requiere CLI interactivo, reportar estado o prompt. PROHIBIDO simular trabajo editando archivos localmente. Tras cada delegación, VERIFICAR el resultado (git diff, build, tests) contra el criterio de aceptación antes de reportar — no asumir que Hermes lo hizo bien.
5. **CERO TOKEN WASTE EN BACKGROUND**: Silenciar notificaciones automáticas de background/timers. No ejecutar herramientas ni responder a menos que el usuario lo pida explícitamente.
6. **ALERT CONTEXT ROT (12-15 TURNOS)**: Al alcanzar 12-15 turnos de conversación, avisar al usuario, generar/actualizar automáticamente `progress.md` con el estado y próximos pasos, e instruirle para abrir un chat limpio.
7. **SKILLS DE PROCESO (OBLIGATORIO)**: En toda tarea de código, aplicar automáticamente las skills si ayudan: spec-driven-development (spec antes de codear en features/cambios grandes), context-engineering (contexto óptimo), doubt-driven-development (revisión adversarial de decisiones no triviales), incremental-implementation (pasos pequeños verificados).
8. **RESEARCH & REUSE ANTES DE DELEGAR**: Antes de delegar/implementar algo nuevo, buscar en orden: (1) GitHub search (implementaciones/patrones existentes), (2) docs oficiales de la librería, (3) web general solo si falta. Preferir fork/port/wrap de OSS que resuelva 80%+ antes que escribir de cero. Ahorra tokens y evita reinventar. (Fuente: reglas ECC auditadas 2026-08-06.)
9. **CONTRATO DE DELEGACIÓN**: La respuesta final ES el deliverable. Si delegas a Hermes, recoges el resultado, lo verificas contra el criterio de aceptación y entonces respondes — nunca terminar con "esperando a Hermes" ni lanzar tareas fire-and-forget. Tarea que no se puede verificar = no está hecha. (Fuente: reglas ECC auditadas 2026-08-06.)
10. **REINICIO DEV SERVER POST-CAMBIOS (PC & MÓVIL)**: Tras cada modificación de código verificada, reiniciar siempre el servidor de desarrollo local (`npm run dev`) y proporcionar al usuario las URLs de acceso tanto para PC (`http://localhost:3000`) como para móvil en la red local (`http://<IP>:3000`).
