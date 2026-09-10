# Auditoría Read-Only (V2) - Claude Opus 5

## 1. Resumen ejecutivo
* **Nº de hallazgos (confirmados):** 8 grupos (4 assets, 3 JS/TS, 1 CSS/Dep).
* **KB estimados eliminables:** ~10 MB (Assets reales) + ~7 KB (JS/TS) + ~16 KB (CSS fuente).
* **Nivel de riesgo global:** Muy bajo. La mayoría es bloat seguro; los falsos positivos de la pasada anterior han sido cazados y descartados.

## 2. Tabla de hallazgos
| Archivo | Líneas | Tipo | Riesgo | Impacto | Evidencia | Motivo |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `public/videos/briefing.webm` / `.webp` | - | Asset | Seguro | ~1.5 MB | `grep` riguroso | Huérfano. Restos de versiones anteriores. |
| `public/videos/fotografia.webm` / `.webp` | - | Asset | Seguro | ~2.5 MB | `grep` riguroso | Huérfano. Restos de versiones anteriores. |
| `public/videos/optics-tech.webm` / `.webp` | - | Asset | Seguro | ~1.65 MB | `grep` riguroso | Huérfano. Restos de versiones anteriores. |
| `public/videos/postproduction.webm`/`.webp`| - | Asset | Seguro | ~1.86 MB | `grep` riguroso | Huérfano. Restos de versiones anteriores. |
| `public/images/portfolio-*.webp` (4) | - | Asset | Seguro | ~2.5 MB | Código / `grep` | Rutas de portfolio no usan estos archivos locales, usan URLs de Vimeo. |
| `public/images/01.webp`, `02.webp`, `fachada.webp` | - | Asset | Seguro | ~500 KB | `grep` riguroso | Nombres genéricos huérfanos sin llamadas dinámicas. |
| `src/components/ui/BlurText.tsx` | 196 | JS/TS | Seguro | 5.5 KB | `npx knip` / AST | Componente nunca instanciado ni importado. |
| `src/hooks/useIsMobile.ts` | 27 | JS/TS | Seguro | 1.1 KB | `npx knip` / AST | Hook sin ningún consumidor. |
| `src/data/droneMini5Pro.ts` | 6 campos| Datos | Riesgo bajo | Lógico | `grep` de keys | Campos inactivos en `MINI_5_PRO_DATA` (`weight`, `videoRes`, etc). |
| `package.json` + `globals.css:2` | 1 import| Dep | Seguro | 16 KB css | `grep` | `tw-animate-css` aporta `@property`, pero cero utilidades consumidas. |

## 3. Bloque SEGURO
* **Eliminar:** `src/components/ui/BlurText.tsx` y `src/hooks/useIsMobile.ts`.
* **Purgar Assets Huérfanos:**
  * `videos/briefing.webm` y `briefing.webp`
  * `videos/fotografia.webm` y `fotografia.webp`
  * `videos/optics-tech.webm` y `optics-tech.webp`
  * `videos/postproduction.webm` y `postproduction.webp`
  * `images/portfolio-paisajes.webp` (y los otros 3 portfolio-*.webp).
  * `images/fachada.webp`, `images/01.webp`, `images/02.webp`.
* **Desinstalar:** Quitar la dependencia de `tw-animate-css` de `package.json` y el `@import` en `globals.css`.
* **Limpiar variables sin uso:** Remover las 6 propiedades no mapeadas de `MINI_5_PRO_DATA`.

## 4. Bloque VERIFICAR
* **Tokens CSS `gold-*`:** Variables `gold-100`, `700`, `800`, `900` y `--font-heading` no se consumen explícitamente. Confirmar visualmente comentando las líneas.
* **Redundancia del Footer en `page.tsx`:** Hay bloques de links duplicados de `NAV_ITEMS`. Es bloat estructural.
* **Limpieza de variables dinámicas:** Hay variables interactivas sin uso como la de `_isHovered` u otras props aisladas (`contact.ts`). Validar manualmente probando el modal de contacto con el servidor de desarrollo activo.

## 5. Bloque RIESGO
* **Purga ciega del sistema `shadcn` (`globals.css` / variables):** A pesar de que casi todos los `sidebar-*`, `chart-*`, etc. no se usan en utilidades directas, Tailwind v4 inyecta variables del `shadcn/tailwind.css`. Tocarlas sin hacer un build A/B puede comprometer la capa base del reseteo `.dark` y los keyframes requeridos por `no-scrollbar` o `scrollbar-thin`. NO borrar ni quitar dependencias de `shadcn`.

## 6. Plan de ejecución por lotes
1. **Lote 1 (Assets):** Borrar físicamente los archivos multimedia descritos en el Bloque Seguro. (Validación: `npm run build`).
2. **Lote 2 (Código y Hooks):** Borrar `BlurText.tsx` y `useIsMobile.ts`. (Validación: `npx tsc --noEmit && npm run build`).
3. **Lote 3 (Limpieza de props de datos):** Limpiar `MINI_5_PRO_DATA` y código de `ContactModal`. (Validación: Compilar, abrir modal de contacto en UI y verificar selectores).
4. **Lote 4 (tw-animate-css):** Quitar import de `globals.css` y la devDependency. (Validación: `npm run build` y visualización para asegurar que no falta ningún `@property`).

## 7. Descartados (FALSOS POSITIVOS DE AUDITORÍAS PREVIAS O HERRAMIENTAS)
* **Assets supuestamente "muertos" (¡Están VIVOS!):**
  * `jose-reveal.mp4/.webm` (Source en `AboutMe.tsx` e `InstagramReelsSection.tsx`).
  * `dji_mini_5_pro_flow.mp4/.webm` (Vivos en `DJI5ProSection.tsx`).
  * `filmacion.webm`, `inmobiliaria.webm`, `eventos.webm`, `mapeo.webm` (Llamados dinámicamente desde `servicesData.ts` y generados con `.replace('.webm', '.webp')` para el póster).
* **Paquete `shadcn`:** Falso positivo de Knip; consumido para la utilidad `no-scrollbar` y `scrollbar-thin`.
* **Falso positivo masivo de Knip:** Marca 73 archivos en `.agents/skills/` como código inútil porque no tiene `knip.json` configurado correctamente.
* **Componentes como `page.tsx` o `layout.tsx`:** Falsos positivos clásicos; son inyecciones automáticas del framework Next.js.

## 8. Limitaciones
* No se ejecutó un bundle build (`npm run build`) para extraer métricas exáctas del árbol JS post-emisión.
* El grafo circular (`madge`) y los tests E2E escaparon al presupuesto temporal de la iteración.
* No existe `knip.json`, lo que provocó que Knip rastreara el subdirectorio de configuración del agente, ensuciando los logs iniciales.
