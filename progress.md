# Progress Summary — Antigravity Session

## Estado Actual y Cambios Realizados

1. **Eliminación de Franjas y Bordes de Separación**:
   - Confinado el haz y degradado de `LampContainer` (`src/components/ui/lamp.tsx`) al contenedor central (`w-[36rem]`), eliminando franjas `inset-x-0` de 100vw que cruzaban de lado a lado la pantalla.
   - Eliminados los bordes divisores (`border-t` / `border-b`) de cabeceras en `DJI5ProSection.tsx`, `ServicesSection.tsx`, `ColorGradingReel.tsx` y `page.tsx`.

2. **Optimización de Rendimiento y Lazy Loading de Vídeos**:
   - Actualizados los elementos `<video>` bajo el hero con `preload="none"` en `DJI5ProSection.tsx`, `ServicesSection.tsx` e `InstagramReelsSection.tsx` para evitar descargas anticipadas de buffer y ahorrar ancho de banda.
   - Verificada la presencia de Schema JSON-LD `LocalBusiness` / `ProfessionalService` en `layout.tsx`.
   - Modificada la regla de delegación en `.agents/AGENTS.md` para especificar DeepSeek Flash v4 en off-peak y Qwen 3.7 / Alibaba API.

3. **Commits Locales Guardados Atómicamente**:
   - `9ee2192`: `docs(rules): actualizar regla de delegacion de hermes para deepseek v4 flash y qwen 3.7 flash`
   - `37f6995`: `perf(video): optimizar lazy loading de videos cambiando preload a none bajo el fold`

---

## Estado Final
- `progress.md` actualizado.
- Base de conocimiento Graphify actualizada (`graphify update .`).
- Cambios subidos a GitHub (`git push`).
- Despliegue completado en Vercel (`vercel --prod`).

---

## Sesión 2026-07-31 (charla) — Infraestructura de conocimiento

### Graphify: grafo reducido a la app (ahorro de tokens)
- El grafo estaba dominado al 90% por `.agents/skills/impeccable` (2.757 de 3.064 nodos; el toolkit NO toca el runtime: 1 sola arista inferida ContactModal→handleKeyDown).
- Creado `.graphifyignore` excluyendo `.agents/skills/impeccable/`.
- Regenerado: `graphify extract . --force --code-only` + `graphify cluster-only . --no-label` (0 tokens, sin LLM).
- Resultado: **248 nodos, 282 aristas, 17 comunidades**, `built_at_commit` = HEAD actual. Reporte: 43 KB → 5,3 KB. Queries ~0,3 s.
- PITFALL: el backup de graphify-out DENTRO del repo lo escanea el extractor (3,4K nodos fantasma). Backup del grafo completo movido a `C:\Users\rgs84\graphify-out.bak-DRONES-20260731` (fuera del repo).
- Rutina: `graphify query "..."`; tras tocar código `graphify update .`. Detalle completo en skill Hermes `graphify`.

### Memoria Hermes + vault
- Memoria de Hermes: 98% → 52% (1.163 chars, 6 entradas). Límite bajado a 1500 (`hermes config set memory.memory_char_limit 1500`, perfil charla).
- Vault reestructurado (patrón OKF/LLM Wiki): `index.md` (mapa maestro) + notas temáticas `modelos-locales.md`, `hermes-setup.md`, `drones-infra.md`. Registro por fecha intacto.
- `DRONES-codebase.md` (2,5 MB, dump repomix) movido fuera del vault y del repo → `C:\Users\rgs84\dumps\`.

### Pendiente
- Primera prueba real de MoA en tarea compleja.
- Seguimiento de delegation-routing en perfil default.


