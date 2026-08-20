# DRONES — Reglas de Proyecto (Next.js/TS)

Diseño: respetar `DESIGN.md`.

1. **ENRUTAMIENTO & DELEGACIÓN**:
   - **Simple (1-2 archivos, estilos, copy):** Directo con **Gemini Flash Low** (0 coste API).
   - **Complejo / Agéntico / Ahorro Tokens:** Vía `hermes chat -q "..."` (prompt self-contained con rutas y criterio de aceptación):
     * **OFF-PEAK (12:00-03:00 y 06:00-08:00 ES):** `deepseek-v4-flash` (prioridad absoluta, mitad de precio).
     * **PICOS (03:00-06:00 y 08:00-12:00 ES) o Límite Tokens:** `qwen3.7-flash` (Alibaba API).
   - **Verificación:** Prohibido fakear delegación o terminar fire-and-forget. Verificar siempre resultado (`git diff`, build).
2. **SEGURIDAD & SCOPE**: Prohibido `git push` o `vercel` sin orden explícita. Consultas/opinión = opciones A/B/C sin editar código.
3. **REINICIO DEV SERVER**: Tras cambios verificados, reiniciar `npm run dev` y dar URLs: PC (`http://localhost:3000`) y Móvil (`http://<IP>:3000`).
4. **CONTEXT ROT**: A los 12-15 turnos, actualizar `progress.md` e instruir apertura de chat limpio.
