# DESIGN.md — Sistema de Diseño & Brand Kit de DRONES (JF.DroneVision)

## 🎨 Paleta de Colores Cinemática (Tokens)

- **Fondo Primario (`--bg-root`):** `#050505` (Space Black / Modo oscuro profundo)
- **Superficie de Tarjetas (`--surface-card`):** `#0f1115` (Titanium Dark)
- **Bordes Reflectores:** `.specular-card` (Linear gradient border highlights)
- **Texto Principal (`--ink-primary`):** `#f3f4f6` (`text-neutral-100` / blanco titanio, contrast ≥4.5:1)
- **Texto Secundario (`--ink-muted`):** `#9ca3af` (`text-neutral-400` / gris accesible)
- **Acento Primario (`--brand-accent`):** `gold-400` = `#dfd0a4` (Dorado bentogrid DJI Mini 5 Pro — gradiente `#dfd0a4` > `#f0e6c8` > `#c8b88a`)
- **Acento Navegación/UI:** `gold-200` (`#f0e6c8`), `gold-300` (`#e8dcb4`), `gold-500` (`#c8b88a`), `gold-600` (`#b09e6e`)
- **Acento Teledeteción/GPS (`--accent-glow`):** `#22d3ee` (`text-cyan-400` / resplandor cian telemétrico)
- **Paleta Gold completa en Tailwind 4 (`@theme`):** `gold-50` a `gold-900` definida en `globals.css`

---

## ✒️ Jerarquía Tipográfica

- **Display / Titulares H1-H2:** `Cinzel` (serif elegante), `Cormorant Garamond` (editorial bold).
  - Letter spacing: `tracking-wide` / `tracking-tight` según contexto.
  - `text-wrap: balance` en titulares largos.
- **Cuerpo / UI:** `Plus Jakarta Sans` / `Montserrat` (sans-serif limpia).
  - `font-light` para párrafos de lectura, `font-semibold` para labels.
- **Datos técnicos / Métricas:** `Montserrat` / `mono` con `tabular-nums`.
  - Coordenadas GPS en `font-mono text-[9px] tracking-[0.3em]`.
- **Acento decorativo:** `Cinzel` para la marca (`JF.DRONEVISION`).

---

## ⚡ Motion & Micro-interacciones (Emil Kowalski Rules)

- **Curva Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (Transiciones exponenciales suaves).
- **Feedback Táctil:** `scale: 0.97` en `whileTap` para todos los botones interactivos.
- **Interrupción:** Animaciones respondientes al cursor mid-flight sin brusquedades.
- **Spotlight Cursor:** Tracking dinámico de posición de ratón `mousePos` en `HeroSection.tsx`.

---

## 📦 Bóveda de Assets de Marca

- **Ruta local:** `/public/brand/`
- **Logo 2D:** Navbar vectorial SVG `JF.DroneVision`.
- **Logo 3D / Render:** Modelo extruido 3D en titanio/oro (generación vía Endless Tools).
