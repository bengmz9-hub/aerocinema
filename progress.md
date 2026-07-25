# Progress & Context Handoff — Proyecto DRONES

## Estado Actual
- ✅ **Regla de Consulta Previa**: Creada regla permanente en `.agents/rules/consultation-workflow.md` para evaluar pros/contras y pedir visto bueno antes de modificar código.
- ✅ **Navbar Mobile-First**: Optimizada altura en dispositivos móviles a `52px`/`46px`, ocultando el subtítulo largo para ganar un 45% de visión vertical.
- ✅ **Sección ColorGradingReel**: Reemplazado el acordeón genérico por un visor comparativo interactivo `D-Log M RAW` vs `Color Graded` con deslizador mediante Pointer Capture API y carrete de cine 35mm centrado.
- ✅ **Sección Instagram Reels Feed**: Reemplazado `PortfolioGrid` por `InstagramReelsSection` con tarjetas de vídeo silencioso **Hover-to-Play** de carga inmediata y enlace directo a la publicación real de Jose (`@jf.drone_visual` / `DYHZnoKN8mh`).
- ✅ **Calidad & Commits**: 0 errores en Biome y TypeScript (`npm run lint`). Todos los cambios respaldados en commits atómicos locales (`1eab103`, `ee9ca42`, `af37964`, etc.).

## Decisiones Tomadas
- Se mantiene estrictamente el entorno local (`localhost:3000` / `npm run dev`) sin realizar `git push` ni deployments automáticos.
- Se eliminaron las dependencias e iframes de terceros con fondo blanco, usando reproductores de vídeo HTML5 locales en formato **Hover-to-Play** para máxima fluidez y velocidad.

## Próximos Pasos Prioritarios
1. ⏳ Iniciar un nuevo chat limpio para restaurar el economizador de tokens a 0 acumulados.
2. ⏳ Continuar con las siguientes secciones de la landing page (Servicios, DJI Mini 5 Pro, Formulario de Contacto o Cotizador).
3. ⏳ Validar respuestas visuales adicionales en dispositivos móviles.
