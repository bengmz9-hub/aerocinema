# DRONES — Deployment, Delegación & Entorno (Antigravity)

Proyecto: portfolio Next.js/TS en `C:\Users\rgs84\DRONES`. Respetar `DESIGN.md` y `design-inspiration.md`.

1. **DELEGACIÓN INTELIGENTE (HERMES / GEMINI FLASH)**:
   - **Tareas Simples (1-2 archivos, copy, estilos):** Directo con **Gemini 3.7 Flash (Low)** en Antigravity. Prohibido gastar saldo API en tareas triviales.
   - **Tareas Complejas / Refactors / Ahorro Tokens:** Vía `hermes chat -q "..."` (`run_command`):
     * **OFF-PEAK (12:00-03:00 y 06:00-08:00 ES - 50% precio):** `deepseek-v4-flash` obligatorio.
     * **PICOS (03:00-06:00 y 08:00-12:00 ES) o Límite Tokens:** `qwen3.7-flash` (Alibaba API).
   - Prompt SELF-CONTAINED: rutas, estado y criterio de aceptación.
2. **LOCAL ONLY & NO AUTO PUSH**: Prohibido `git push` o `vercel`. Solo con orden explícita: *"Ejecuta push de fin de sesión"*.
3. **NO EDICIÓN EN FEEDBACK/OPINIÓN**: Dar opciones A/B/C. Prohibido editar código sin confirmación.
4. **NO FAKEAR DELEGACIÓN + VERIFICAR**: Si Hermes falla, reportar error/prompt. Prohibido simular trabajo. Verificar siempre con `git diff` y build.
5. **CERO TOKEN WASTE EN BACKGROUND**: Silenciar background/timers. No ejecutar herramientas sin petición explícita.
6. **ALERT CONTEXT ROT (12-15 TURNOS)**: Al llegar a 12-15 turnos, actualizar `progress.md` e instruir apertura de chat limpio.
7. **SKILLS DE PROCESO**: Aplicar bajo demanda: `spec-driven`, `context-engineering`, `doubt-driven`, `incremental-implementation`.
8. **RESEARCH & REUSE**: Buscar antes de crear: (1) GitHub search, (2) docs oficiales, (3) web. Priorizar OSS sobre reinventar.
9. **CONTRATO DE DELEGACIÓN**: La respuesta final ES el deliverable. Verificar siempre el resultado de Hermes antes de responder; prohibido fire-and-forget.
10. **REINICIO DEV SERVER POST-CAMBIOS**: Tras cambios verificados, reiniciar `npm run dev` y dar URLs: PC (`http://localhost:3000`) y Móvil (`http://<IP>:3000`).
11. **DIETA DE TOKENS & RAG NOTEBOOKLM**:
    - **Consultas de Negocio/Docs:** Prohibido volcar PDFs o guías largas al chat; consultar a `notebooklm` MCP (`chat_ask` en el cuaderno `JF.DroneVision`).
    - **Serialización Densa:** Usar TSV/TOON en listas de datos en lugar de JSON inflado (-75% tokens).
    - **Patrón Sándwich:** Repetir restricciones críticas al final del prompt para evitar el sesgo de recencia.
