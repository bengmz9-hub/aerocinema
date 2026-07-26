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

## ✒️ Jerarquía Tipográfica (v2.0 — 3 fuentes con roles nítidos)

### Fuentes activas

| Jerarquía | Fuente | Roles | Pesos cargados |
|-----------|--------|-------|----------------|
| 🥇 **Display** | `Cinzel` | H1, H2 principales, marca `JF.DRONEVISION`. Serif elegante y única | 400, 700 |
| 🥈 **Editorial** | `Cormorant Garamond` | Subtítulos H2, H3, itálicas decorativas, highlights editoriales | 400, 500, 600, 700 |
| 🥉 **Funcional** | `Plus Jakarta Sans` | Body, UI, nav, botones, labels, tags, datos técnicos — TODO lo no-display | 300, 400, 500, 600 |

> ❌ **Eliminadas:** Montserrat (absorbida por Jakarta), Geist (no se usaba)

### Reglas de uso

- **Cinzel (Display):** Siempre `uppercase`, siempre con **negative letter-spacing**:
  - `56–72px` → `tracking-[-0.03em]`
  - `36–56px` → `tracking-[-0.02em]`
  - `24–36px` → `tracking-[-0.01em]`
  - `<24px` → `tracking-normal`
  - `text-wrap: balance` en titulares largos
- **Cormorant (Editorial):** Solo para H3, subtítulos H2, itálicas doradas decorativas.
  - La itálica de Cormorant es su superpoder — úsala para el acento gold (`text-gold-400 italic`)
- **Jakarta (Funcional):** `font-light` para párrafos de lectura, `font-semibold` para labels/CTAs.
  - Coordenadas GPS en `font-mono text-[9px] tracking-[0.3em]`
  - `tabular-nums` para datos técnicos

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
