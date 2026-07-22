# DESIGN.md — Sistema de Diseño & Brand Kit de DRONES (JF.DroneVision)

## 🎨 Paleta de Colores Cinemática (Tokens)

- **Fondo Primario (`--bg-root`):** `#050505` (Space Black / Modo oscuro profundo)
- **Superficie de Tarjetas (`--surface-card`):** `#0f1115` (Titanium Dark)
- **Bordes Reflectores:** `.specular-card` (Linear gradient border highlights)
- **Texto Principal (`--ink-primary`):** `#f3f4f6` (`text-neutral-100` / blanco titanio, contrast ≥4.5:1)
- **Texto Secundario (`--ink-muted`):** `#9ca3af` (`text-neutral-400` / gris accesible)
- **Acento Primario (`--brand-accent`):** `.text-golden-hour` (Amber Golden Hour `#d4af37` gradient)
- **Acento de Navegación:** `#fef3c7` (`text-amber-200`)
- **Acento Teledeteción/GPS (`--accent-glow`):** `#22d3ee` (`text-cyan-400` / resplandor cian telemétrico)

---

## ✒️ Jerarquía Tipográfica

- **Display / Titulares H1-H2:** `Outfit` / `Alumni Sans` en caixa alta.
  - Escalado fluido: `text-[clamp(2.5rem,5vw+1rem,5.5rem)]`
  - Letter spacing floor: `-0.02em` a `-0.03em`.
  - `text-wrap: balance`.
- **Cuerpo de Texto / P:** `Inter` / `Albert Sans`.
  - Longitud de línea: max `65ch` a `75ch`.
  - `text-wrap: pretty`.
- **Métricas & Coordenadas:** `tabular-nums` en números comparativos.

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
