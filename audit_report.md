# Auditoría de bloat (solo lectura): DRONES

> Stack real según `package.json`: Next.js **15.5.20**, React 19.0.0, Tailwind **4.0.0**, Biome 2.5.4 (no ESLint), knip 6.x. 1 MB = 1 000 000 B. Los tamaños son de fichero, no del bundle (ver §8).

## 1. Resumen ejecutivo

| Métrica | Valor |
|---|---|
| Hallazgos | **22**: 2 SEGURO · 16 VERIFICAR · 4 RIESGO |
| Eliminable en `/public` | **14.60 MB** (14 596 869 B), el 34,9 % de `/public` (41,88 MB). Afecta al peso del repo y del deploy, no a la carga de páginas: esos ficheros nunca se piden. |
| Código SEGURO | 2,3 KB de fuente. **0 KB de bundle**: los módulos no importados no entran en el grafo de Next. |
| Código/CSS VERIFICAR | ~22 KB de fuente (el CSS generado no se midió) |
| Imports/variables sin usar | 0 (tsc `--noUnusedLocals --noUnusedParameters` y Biome, ambos limpios) |
| Dependencias circulares | 0 |
| Riesgo global | **Bajo**. La única decisión con impacto SEO es la ruta `/portfolio/[category]`. |

## 2. Tabla de hallazgos (por impacto)

| ID | Archivo | Líneas | Tipo | Riesgo | Impacto | Evidencia | Motivo |
|---|---|---|---|---|---|---|---|
| H1 | `public/images/dji_mini_5_pro_{etiquetas_castellano,frame1_assembled,frame2_midway,mockup,photorealistic}.jpg` | — | Asset huérfano | Verificar | 2,94 MB | E6, E7, E9 | 0 referencias. `dji_mini_5_pro_mockup` nunca aparece en el historial de `src`. |
| H2 | `public/videos/fotografia.{webm,webp}` | — | Asset huérfano | Verificar | 2,67 MB | E6, E8, E9 | Se usó hasta 5eb9a77 (2026-08-02). Solo lo cita un Lighthouse antiguo. |
| H3 | `public/images/portfolio-{eventos,paisajes,propiedades-1,propiedades-2}.webp` | — | Asset huérfano | Verificar | 2,55 MB | E6, E9 | 0 referencias actuales. |
| D3 | `public/videos/jose-reveal.mp4` + `.webm` | `AboutMe.tsx:23`, `InstagramReelsSection.tsx:81` | Duplicado de formato | **Riesgo** | ~2,0 MB | E6, E7 | El mismo clip en 2 formatos, cada uno con un único consumidor. |
| H4 | `public/videos/postproduction.{webm,webp}` | — | Asset huérfano | Verificar | 1,95 MB | E6, E9 | Retirado en 63ffe3f (2026-07-25). |
| H5 | `public/videos/optics-tech.{webm,webp}` | — | Asset huérfano | Verificar | 1,71 MB | E6, E9 | Retirado en 5971a54 (2026-07-25). |
| H6 | `public/videos/briefing.{webm,webp}` | — | Asset huérfano | Verificar | 1,56 MB | E6, E9 | Retirado en 63ffe3f (2026-07-25). |
| H7 | `public/images/bentogrid_{color,hybrid}_options_comparison.jpg` | — | Asset huérfano | Verificar | 1,15 MB | E6, E9 | Nunca referenciado en `src`. Son mockups de diseño. |
| H8 | `public/videos/fachada.webp` | — | Asset huérfano | Verificar | 55,8 KB | E6, E7, E9 | Nunca referenciado en `src`. |
| H10 | `tw-animate-css` (`package.json` deps) + `src/app/globals.css:2` | 1 | Dependencia CSS sin uso | Verificar | 14,9 KB de CSS fuente | E10 | 0 utilidades de la librería usadas en TSX. |
| H9 | `public/videos/filmacion.webp` | — | Asset huérfano | Verificar | 14,6 KB | E6, E7, E9 | `filmacion.webm` se usa sin `poster`, así que el `.webp` no lo pide nadie. |
| H11 | `src/app/portfolio/[category]/page.tsx` + `src/data/videos.ts` | 125 + 48 | Ruta sin enlace interno | **Riesgo** | 5,6 KB | E12, E7 | Solo accesible desde `sitemap.xml` y `robots.txt`. |
| H16 | `src/app/globals.css:18,72,75-103` + variables en `:root` / `.dark` | ~60 | Tokens de tema sin consumidor | Verificar | ~3 KB (estimado) | E11 | Tokens shadcn (sidebar, chart, card, …) y `void-900`/`font-heading` sin uso. |
| H17 | `scripts/audit-precommit.sh` | 53 | Script sin consumidor | Verificar | 2,06 KB | E15 | Ni package.json ni los hooks lo invocan. |
| H12 | `src/components/ui/BlurText.tsx` | 47 | Componente no importado | **Seguro** | 1,28 KB | E1, E5, E9 | knip + rg: 0 imports. |
| H13 | `src/hooks/useIsMobile.ts` | 27 | Hook no importado | **Seguro** | 1,03 KB | E1, E5, E9 | knip + rg: 0 imports. |
| H14 | `src/components/InstagramReelsSection.tsx:4,34,47,58,69,80,148-159,171-174` | ~20 | Rama muerta por datos | Verificar | ~1 KB | E14 | Todos los `thumbnail` son `""`, así que `<Image>` nunca se renderiza. |
| H18 | `run_claude.js` (sin trackear) + `audit_report.md` (0 B, sin trackear) | 11 | Tooling fuera de la app | Verificar | 0,4 KB | E1 | Lanzador del pipeline de auditoría. No es código de la app. |
| H15 | `src/components/ScrollRestorer.tsx:5-19` + `src/app/page.tsx:6` | 19 | Lógica muerta | Verificar | 0,4 KB | E13 | Lee `sessionStorage["lastScrollY"]`, pero nada lo escribe. |
| D2 | `src/components/sections/FAQSection.tsx:17-47`, `src/app/layout.tsx:134-160`, `shared/faq-content.md` | — | Contenido duplicado | **Riesgo** | ~0 KB | E17, E6 | 3 fuentes de FAQ con redacción divergente. |
| D1 | `src/components/sections/ContactSection.tsx:46`, `src/app/page.tsx:219` | 2 | Lógica duplicada | **Riesgo** (bajo) | ~0 KB | E7 | Construyen `wa.me` a mano en lugar de usar `getWhatsAppLink` (`lib/whatsapp.ts:4`). |
| H19 | `src/data/droneMini5Pro.ts:8` (`export interface DroneSpecs`) | 1 | Export sin consumidor | Verificar | 0 KB | E16 | Solo se usa localmente en `:22`. knip no lo reporta. |

### Comandos de evidencia

Las búsquedas `rg` se ejecutaron con ripgrep (herramienta Grep); `EXCL` = `-g "!{.agents,.token-optimizer,.hermes,.codex,stages,graphify-out,.worktrees}/**"`.

- **E1**: `npx knip --no-progress --reporter compact` → *Unused files (76)*: `src/components/ui/BlurText.tsx`, `src/hooks/useIsMobile.ts`, `run_claude.js` y 73 ficheros de `.agents/skills/impeccable/scripts/**` (ver §7).
- **E2**: `npx knip --no-progress --exports --dependencies --reporter compact` → sin salida, exit 0.
- **E3**: `npx tsc --noEmit --incremental false --noUnusedLocals --noUnusedParameters` → exit 0.
- **E4**: `npx biome lint src` → `Checked 30 files … No fixes applied`, exit 0.
- **E5**: `rg -n "BlurText|useIsMobile|HeroParticles|run_claude|generate-map|audit-precommit|adversarial_gate" EXCL` → `BlurText` y `useIsMobile` solo aparecen en su propia definición y en `.project-map.md` (árbol autogenerado, no es consumidor).
- **E6**: `rg -n "bentogrid|dji_mini_5_pro_(etiquetas|frame|mockup|photorealistic)|portfolio-(eventos|paisajes|propiedades)|briefing|fachada|fotografia\.|optics-tech|postproduction|jose-reveal\.webm|hero-poster|favicon" EXCL` → los assets huérfanos solo salen en `.project-map.md`. "fachada" solo aparece como palabra en prosa.
- **E7**: `rg -n "\.(webm|webp|mp4|jpg|jpeg|png|svg|gif|avif|ico|txt|xml)\b" src` y `rg -n "wa\.me|getWhatsAppLink|whatsappUrl\s*=|poster|thumbnail|\.replace\(|\`/videos/|\`/images/|id=\"" src` → la única ruta construida dinámicamente es `ServicesSection.tsx:78` (`.webm`→`.webp`).
- **E8**: `rg -n "<patrón E6 de assets>" -g "{stages,.agents,.hermes,.codex,_config,shared,scripts}/**"` → solo informes previos y `stages/04_qa_auditoria/output/lighthouse-home.json:1177,3740` (`fotografia.webm`, captura de una versión antigua).
- **E9**: `git log -S "<cadena>" --format="%h %ad %s" --date=short -- src` con estas cadenas:
  - `fotografia.webm` → 5eb9a77
  - `optics-tech` → 5971a54
  - `postproduction` y `briefing` → 63ffe3f
  - `portfolio-` → cf7d119 (cadena ambigua)
  - `bentogrid_`, `dji_mini_5_pro_mockup`, `fachada.webp`, `filmacion.webp` → sin resultados
  - `<BlurText` → 727e48f (2026-08-20)
  - `useIsMobile(` → 7fddcab (2026-09-10 19:09, auto-checkpoint)
- **E10**: `rg -o "animate-[\w\[\]-]+|no-scrollbar|scroll-fade[\w-]*|shimmer[\w-]*|data-(open|closed|checked|unchecked|selected|disabled|active|horizontal|vertical):|accordion-(up|down)" src -g "*.{tsx,ts}"` y `rg -o "\bdelay-[\w\[\]\.]+|\brepeat-[\w\[\]]+|\bdirection-\w+|\bfill-mode-\w+|\brunning\b|\bpaused\b|\banimation-duration-[\w\[\]]+" src -g "*.tsx"`.
  - Resultado: solo `animate-ping`/`animate-pulse` (core de Tailwind), `animate-blur-in` (custom, `globals.css:270`) y `no-scrollbar` (`Navbar.tsx:310`). La segunda búsqueda no devuelve nada.
  - Utilidades que expone `node_modules/tw-animate-css/dist/tw-animate.css`: `fade-*`, `slide-*`, `zoom-*`, `spin-*`, `blur-in/out`, `delay-*`, `repeat-*`, `direction-*`, `fill-mode-*`, `running`, `paused`, `animation-duration-*`. Ninguna se usa.
- **E11**: `rg -o "\b(bg|text|border|ring|fill|stroke|outline|from|to|via)-(sidebar[\w-]*|chart-[1-5]|card(-foreground)?|popover(-foreground)?|primary(-foreground)?|secondary(-foreground)?|muted(-foreground)?|accent(-foreground)?|destructive|input|background|foreground)\b|\bfont-heading\b|\bdark\b|\bvoid-900\b" src -g "*.{tsx,ts}"` → única coincidencia: `dark` en `layout.tsx:172`.
- **E12**: `rg -n "href=|router\.(push|replace)|\"/portfolio|/aviso-legal|window\.location" src` → ningún enlace a `/portfolio/*`. Los `#portfolio` son anclas (`HeroSection.tsx:90`, `page.tsx:186`) hacia `page.tsx:22`.
- **E13**: `rg -n "lastScrollY" src` → solo lecturas (`ScrollRestorer.tsx:8,10`). `git log -S "lastScrollY" -- src` → un único commit, a09f2ab: el escritor nunca existió en `src`.
- **E14**: incluido en E7 → `thumbnail: ""` en `InstagramReelsSection.tsx:47,58,69,80`. `next/image` solo se importa en ese fichero (E18).
- **E15**: `rg -l "audit-precommit" -g "!{node_modules,.next,.git}/**"` → el propio script y `.project-map.md`.
  - `Select-String -Pattern "adversarial_gate|audit-precommit|generate-map"` sobre `C:/Users/rgs84/.git_global_hooks/*` → solo `generate-map.js` (copia propia del hook) y `adversarial_gate.py`.
  - `Test-Path .hermes/audit-precommit.sh` → False.
- **E16**: `rg -n "DroneSpecs" src` → `droneMini5Pro.ts:8,22`.
- **E17**: `rg -n "question:|name: \"¿" src` → 6 preguntas en `FAQSection.tsx` y 3 en el JSON-LD de `layout.tsx:139,147,155`, con redacción distinta.
- **E18**: `rg -n "^\s*import\s|from\s+[\"']|import\(|require\(|dynamic\(" src` → grafo de imports (§7). Sin `next/dynamic` ni `import()`.

## 3. SEGURO: eliminación sin efecto posible

| Archivo | Por qué no puede tener efecto |
|---|---|
| `src/components/ui/BlurText.tsx` | Sin importadores (E1, E5) y sin imports dinámicos en `src` (E18). No entra en el grafo de build. Sin uso desde 727e48f (2026-08-20). |
| `src/hooks/useIsMobile.ts` | Igual (E1, E5). **Nota:** su última llamada se quitó hoy (7fddcab, auto-checkpoint 19:09). Si es trabajo en curso, conservarlo; la decisión es de intención, no de comportamiento. |

## 4. VERIFICAR: probablemente muerto

| ID | Cómo confirmarlo |
|---|---|
| H1, H7, H8, H9 (4,16 MB, nunca referenciados en `src`) | Revisar en los logs de Vercel (≥30 días) si hay peticiones a esas URLs, que indicarían hotlinks externos. Si no hay tráfico, pasan a seguros. |
| H2–H6 (10,43 MB, retirados del código) | Lo mismo con los logs de Vercel. `git show 5eb9a77 63ffe3f 5971a54 cf7d119 -- src` para confirmar que fue una retirada intencionada. Siguen en git, así que borrarlos es reversible. |
| H10 `tw-animate-css` | En otra rama: quitar `globals.css:2`, ejecutar `npm run build`, comparar el tamaño de `.next/static/css/*.css` antes y después y hacer una revisión visual de home, modal y 404. **Ojo:** la librería redefine `delay-*`; hoy no se usa ningún `delay-*` (E10), pero hay que volver a comprobarlo antes. Desinstalarla requiere `npm uninstall` (fuera de esta auditoría). |
| H16 tokens shadcn | Hay que conservar `--background`, `--foreground`, `--border`, `--ring` (usados en `globals.css:186,189`) y `--radius*` (afectan a todos los `rounded-*`). El resto (sidebar, chart, card, popover, primary, secondary, muted, accent, destructive, input, `--font-heading` en :72, `--color-void-900` en :18) no tiene consumidor en TSX. Dos cautelas: `components.json` hará que `shadcn add` los reinyecte, y no se midió si Tailwind 4.0 los emite. Confirmar con un diff del CSS de `.next`. De paso: `Navbar.tsx:276` usa el literal `#070708`, el mismo valor que `void-900`. |
| H14 rama `thumbnail` | Preguntar si hay posters previstos para los reels. Si no, se pueden eliminar la rama `<Image>` (148-159), el campo (34, 47, 58, 69, 80), el import de `next/image` (4) y la rama inalcanzable del ternario (171-174). Confirmar con `rg -n "thumbnail" src` y una prueba visual de `#reels`. |
| H15 `ScrollRestorer` | Nada escribe `lastScrollY` (E13), así que es una feature incompleta o muerta. Confirmar con `git show a09f2ab -- src` si faltaba el escritor, por ejemplo al volver desde `/aviso-legal` (que usa `document.referrer`, `aviso-legal/page.tsx:13`). Si se elimina, quitar también el import y el uso en `page.tsx:6`. |
| H17 `audit-precommit.sh` | Preguntar si se lanza a mano o desde Hermes. Su comentario de uso (`:3`) apunta a `.hermes/audit-precommit.sh`, que no existe. |
| H18 `run_claude.js`, `audit_report.md` | Son del pipeline de auditoría (`run_claude.js:3` lee `stages/04_qa_auditoria/inputs/claude_audit_prompt_v2.xml`). Están sin trackear. Decidir si se versionan, se mueven a `stages/` o se borran. |
| H19 `DroneSpecs` | Opcional: quitar el `export`. Validar con `npx tsc --noEmit`. |

## 5. RIESGO: no tocar sin decisión humana

| ID | Por qué |
|---|---|
| **H11** `/portfolio/[category]` + `data/videos.ts` | No hay ningún enlace interno (E12), pero la ruta está publicada en `public/sitemap.xml` (`/portfolio/paisajes`, `/propiedades`, `/eventos`) y en `robots.txt` (`Allow: /portfolio/`): quitarla genera 404 en URLs posiblemente indexadas. **Además**, `page.tsx:102-104` pinta `<video src={video.url}>` con URLs de `player.vimeo.com` (`videos.ts:15,23,33,43`) y la CSP de `next.config.mjs:19-21` no declara `media-src`, que cae a `default-src 'self'`: lo esperable es que el navegador bloquee esos vídeos (confirmar en DevTools). El contenido parece placeholder ("Mansión Minimalista", "Festival de Luz"). Hay que elegir: A) eliminar la ruta, `videos.ts` y las entradas del sitemap (con 301 a `/#portfolio`); B) arreglar CSP y contenido. Aparte, las URLs llevan `oauth2_token_id`: revisarlo por seguridad (fuera de alcance). |
| **D2** FAQ en triple fuente | El JSON-LD `FAQPage` (`layout.tsx:134-160`, 3 preguntas) no coincide con la FAQ visible (`FAQSection.tsx`, 6 preguntas con otra redacción), y `shared/faq-content.md` duplica el texto de `FAQSection.tsx:19`. Unificarlas en una sola fuente es una decisión de contenido y SEO. |
| **D3** `jose-reveal.mp4` / `.webm` | Unificar en un solo formato ahorra ~2 MB de deploy, pero cambia el códec que reciben Safari y los navegadores antiguos. `AboutMe.tsx:23` solo sirve mp4, sin `<source>` webm, y los reels sirven webm sin fallback. |
| **D1** URL de WhatsApp duplicada | Hoy la salida es idéntica (`CONTACT_PHONE` solo lleva dígitos, `config.ts:1`), pero unificar implica refactorizar 2 componentes y queda fuera del alcance de borrado. Si se hace: `getWhatsAppLink(CONTACT_PHONE, selectedMessage)` en `ContactSection.tsx:46` y `getWhatsAppLink(CONTACT_PHONE)` en `page.tsx:219`. |

## 6. Plan de ejecución por lotes

Un commit local por lote. **Validación en todos:** `npx tsc --noEmit && npm run build`. `prebuild` regenera `.project-map.md`; es esperado.

| Lote | Contenido | Orden | Validación extra |
|---|---|---|---|
| 1 | H12 `BlurText.tsx`, H13 `useIsMobile.ts` | Borrar ambos | `npx knip` → ya no deben aparecer |
| 2 | H7, H1, H8, H9 (4,16 MB) | Primero revisar logs de Vercel; después borrar | Build, luego `npm start` y DevTools › Network en `/`: 0 respuestas 404 |
| 3 | H2, H3, H4, H5, H6 (10,43 MB) | Tras el lote 2 sin incidencias | Igual que el lote 2 y además `/aviso-legal` y 404 |
| 4 | H15 (`ScrollRestorer.tsx` + uso en `page.tsx:6`), H14 (rama `thumbnail`) | H15, luego H14 | `npx biome lint src` y prueba visual de `#reels` en móvil y escritorio |
| 5 | H10 (`globals.css:2`), H16 (tokens) | H10, luego H16 | Diff del tamaño de `.next/static/css/*.css` y revisión visual completa. `npm uninstall tw-animate-css` solo al final. |
| 6 | H17, H18, H19 | Según la decisión del usuario | `npx tsc --noEmit` |
| — | H11, D1, D2, D3 | **Sin lote** hasta que haya decisión | — |

## 7. Descartados (parecían bloat y no lo son)

| Elemento | Motivo |
|---|---|
| 73 ficheros de `.agents/skills/impeccable/scripts/**` (knip, E1) | Tooling de una skill externa, no es código de la app. knip los incluye porque no hay `knip.json`. Sugerencia: `ignore: [".agents/**"]`. |
| `public/videos/{inmobiliaria,mapeo,eventos}.webp` | No hay literal, pero la ruta se construye en `ServicesSection.tsx:78` (`.replace(/\.webm$/i, ".webp")`) a partir de `servicesData.ts:28,41,54`. Trampa de string dinámico. |
| `public/videos/dji_mini_5_pro_flow.mp4` (5,74 MB) + `.webm` | Son `<source>` de fallback entre sí (`DJI5ProSection.tsx:47,51`). Hacen falta los dos. |
| `jose-reveal.webp`, `hero.webm`, `hero.webp`, `images/hero-poster.webp`, `favicon.svg` | `AboutMe.tsx:19`, `HeroSection.tsx:24,29`, `layout.tsx:52,62,76,94,95` (metadata OG y JSON-LD). |
| `public/robots.txt`, `public/sitemap.xml` | Ficheros servidos por convención. `Disallow: /api/` sin rutas API es inocuo. |
| `not-found.tsx`, `layout.tsx`, `page.tsx`, `aviso-legal/page.tsx` | Convenciones de Next. `/aviso-legal` está enlazada desde `page.tsx:258,265`, `CookieBanner.tsx:53` y `ContactModal.tsx:299`. |
| `app/actions/contact.ts` | Server action importada en `ContactModal.tsx:6`. |
| Import `shadcn/tailwind.css` (`globals.css:3`) y la devDep `shadcn` | Aporta `no-scrollbar`, usado en `Navbar.tsx:310`. |
| `.dark {…}` y `@custom-variant dark` | Activos: `<html className="dark …">` en `layout.tsx:172`, que alimenta `@apply border-border outline-ring/50` (`globals.css:186`). |
| `animate-ping` / `animate-pulse` | Son del core de Tailwind, no de `tw-animate-css`. |
| `animate-blur-in`, `text-golden-hour`, `text-titanium`, `specular-card` | En uso: `ContactModal.tsx:151`, `HeroSection.tsx:47,50`, `not-found.tsx:104` y 9 usos de `specular-card`. |
| `--font-cinzel`, fuente `JetBrains_Mono` | `font-cinzel` en `not-found.tsx:104`; `font-mono` en `InstagramReelsSection.tsx:186`. |
| `HeroParticles.tsx`, `ScrollRestorer` como import | `HeroSection.tsx:5`, `page.tsx:6`. El problema de ScrollRestorer es su lógica (H15), no el import. |
| `scripts/generate-map.js` | Lo usan `package.json` (`map`, `predev`, `prebuild`). |
| `scripts/adversarial_gate.py` | Lo invoca el hook global `pre-push:35-37`. |
| Reuso de `inmobiliaria.webm` y `eventos.webm` en servicios y reels | Mismo asset en dos contextos: comparte caché y no duplica peso. |
| Dependencias `clsx`, `tailwind-merge`, `framer-motion`, `lucide-react`, `resend` | Importadas (E18). knip `--dependencies` → 0 (E2). |
| Dependencias circulares | E18: `app/*` → `components/*`, `lib/*`, `data/*`; `ContactSection` → `ContactModal` → `app/actions/contact` → `resend`; `HeroSection` → `ui/HeroParticles`; `lib/*` y `data/*` solo importan paquetes externos. Ningún módulo importa `page` ni `layout`. **0 ciclos.** |

## 8. Limitaciones

- **`npm run build` no se ejecutó.** `prebuild` lanza `scripts/generate-map.js`, que hace `fs.writeFileSync(".project-map.md")`, y escribir ficheros está prohibido. Por eso no se midieron ni el JS ni el CSS del bundle: los KB son tamaños de fichero. Tampoco se analizó el `.next` existente (BUILD_ID del 2026-09-10 21:00).
- `tsc` se ejecutó con `--incremental false` para no reescribir `tsconfig.tsbuildinfo` (el tsconfig tiene `incremental: true`).
- `madge`, `depcheck` y `ts-prune` no están instalados (`node_modules/.bin` no los tiene) y `npx` los descargaría, lo que equivale a instalar. Se sustituyeron por knip y el grafo manual de E18.
- No hay ESLint en el proyecto (usa Biome), así que se ejecutó `biome lint`.
- No hubo acceso a logs ni analytics de Vercel: los hotlinks externos a `/public` no se pueden verificar.
- `git log -S` por asset solo se ejecutó para las cadenas de E9; para el resto de `dji_mini_5_pro_*.jpg` solo hay evidencia de 0 referencias actuales (E6).
- Los componentes grandes (`Navbar.tsx` 15,7 KB, `ContactModal.tsx` 13,4 KB, `AboutMe.tsx`, `InstagramReelsSection.tsx`) no se leyeron enteros. La lógica muerta interna solo está cubierta por tsc `--noUnused*` y Biome.
- Fuera de alcance (no son la app): `.agents`, `.hermes`, `.codex`, `.token-optimizer`, `stages`, `shared`, `_config`, `graphify-out`, `.worktrees`. No se comparó `scripts/generate-map.js` con su copia en `C:/Users/rgs84/.git_global_hooks/generate-map.js`.
- **El informe previo `stages/04_qa_auditoria/output/audit_report_v2.md:16,30` no es fiable.** Lista `public/images/01.webp`, `02.webp` e `images/fachada.webp`, que no existen en `git ls-files public` (`fachada.webp` está en `public/videos/`).
- Fuera de alcance, solo como nota: `images/hero-poster.webp` pesa 2,68 MB y es la imagen OG; conviene optimizarla. `postcss.config.mjs` fija `base` con una ruta absoluta de Windows, lo que hace el build poco portable.
