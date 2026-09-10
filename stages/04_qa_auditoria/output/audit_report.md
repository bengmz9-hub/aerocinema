# Reporte de Auditoría de Código (Minimalismo) - Claude Opus 5

**Objetivo:** Identificar código muerto, dependencias no utilizadas y activos inflados en el repositorio sin alterar la funcionalidad. (Modo: Sólo lectura).

## 1. Archivos Muertos y Componentes No Utilizados
*   **Componentes huérfanos**: `src/components/ui/BlurText.tsx` (5.5 KB) no se importa ni se usa.
*   **Hooks muertos**: `src/hooks/use-mobile.tsx` no se utiliza.
*   **Campos y Variables sin uso**:
    *   `src/data/droneMini5Pro.ts`: 6 de los 11 campos de `MINI_5_PRO_DATA` están muertos (`weight`, `videoRes`, `flightTime`, `range`, `obstacleAvoidance`, `components`).
    *   `src/data/instagramReels.ts`: 4 campos muertos (`overlayColor`, `isSponsor`, `sponsors`, `gradientOverlay`).
    *   `src/components/layout/Navbar.tsx`: variable `_isHovered` se asigna pero nunca se lee (advertencia de linter inminente).
    *   `src/app/layout.tsx`: Hay un `<meta name="description">` crudo inyectado dentro del `<head>` que duplica lo que Next.js ya inyecta a través de la exportación nativa `metadata`.

## 2. Dependencias y Bloat CSS
*   **`tw-animate-css`**: Importado en `globals.css` (aportando ~16 KB de utilidades), pero el proyecto **solo** usa `animate-ping`, `animate-pulse` (nativas de Tailwind) y `animate-blur-in` (definida a mano). Se puede borrar del import y de `package.json` de manera segura.
*   **`shadcn` (devDependency)**: Aunque `knip` lo marca como sin uso, **NO** debe borrarse ciegamente. `globals.css` hace un `@import "shadcn/tailwind.css"`, de donde el proyecto saca la clase `no-scrollbar` usada críticamente en el `Navbar:310`. Si se quiere quitar el paquete, hay que reemplazar la clase localmente con un `@utility no-scrollbar`.

## 3. Limpieza de Tokens en `globals.css`
*   Hay varios tokens y colores definidos (e.g., `gold-100`, `gold-700`, `gold-800`, `gold-900`, `--font-heading`) sin ningún consumidor en el código.
*   El archivo inyecta un gran sistema de variables (del `shadcn` theme, ej. `sidebar-*`, `chart-*`, `popover-`) que no están utilizándose, ya que no se usa Radix. Recomendación: probar su purga en una rama separada para no romper la herencia de estilos base imprevistos.

## 4. Bloat Masivo en Activos (Assets Muertos)
Se identificaron 14 archivos multimedia muertos en `public/` (aprox. **13.92 MB** extra de peso) que no se renderizan en absoluto en la web:
*   `videos/dji_mini_5_pro_flow.mp4` y `.webm` (6.84 MB)
*   `videos/jose-reveal.mp4` y `.webm` (4.23 MB)
*   `videos/filmacion.webm` (1.37 MB)
*   `images/portfolio-events.webp`, `portfolio-filmmaking.webp`, `portfolio-inmobiliaria.webp`, `portfolio-tech.webp` (2.56 MB): La web muestra videos de Vimeo para el portafolio; no carga estas miniaturas locales.
*   `videos/briefing.webm`, `fotografia.webm`, `optics-tech.webm`, `postproduction.webm`.
*(Nota: Los videos `inmobiliaria.webm`, `eventos.webm`, y `mapeo.webm` sí están vivos, al igual que los posters generados desde código).*

## Conclusión
La aplicación de esta limpieza (priorizando Assets y Componentes/Campos) reduce drásticamente el peso y el desorden, y no altera en absoluto (0%) el comportamiento ni la UI en el entorno productivo.
