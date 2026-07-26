# Design Inspiration — Búnker de Recursos de JF.DroneVision

Última actualización: 2026-07-26

---

## 🎨 Galerías, Componentes & Repositorios de Diseño

### Footers & Headers
| Recurso | URL | Notas |
|---|---|---|
| Footer Design | https://footer.design | Galería curada de los mejores footers del mundo |
| Headers Club | https://headers.club | Galería de cabeceras y navbars |
| Dark Design | https://dark.design | Curaduría de webs con estética oscura |

### Componentes UI React/Next.js
| Recurso | URL | Notas |
|---|---|---|
| React Bits | https://reactbits.dev/components | Componentes y efectos animados (Tailwind + Framer Motion + WebGL) |
| Vengeance UI | https://vengenceui.com/components | Componentes animados y efectos de movimiento avanzados |
| Watermelon UI | https://ui.watermelon.sh | 260+ componentes shadcn/ui copy-paste gratuitos |
| Skiper UI | https://skiper-ui.com | Componentes animados estilo Apple/Linear con Framer Motion |
| Magic UI | https://magicui.design | Componentes animados React + Tailwind + Framer Motion |
| Lightswind UI | https://lightswind.com | 160+ componentes animados por CLI |
| OriginKit | https://originkit.dev | Componentes interactivos y efectos futuristas |
| Catalyst / shadcn | https://catalyst.tailwindui.com / https://ui.shadcn.com | Componentes enterprise y dashboards |

### Planillas & Generadores
| Recurso | URL | Notas |
|---|---|---|
| HorizonX | https://horizonx.so/explore | Catálogo de plantillas, héroes, dashboards y landing pages |
| Page UI | https://pageai.pro | Landing page components para React/Next.js + TailwindCSS |
| Aceternity UI | https://ui.aceternity.com | 200+ componentes con Framer Motion (bento grids, parallax, glow) |

### Generadores SVG / 3D / Efectos
| Recurso | URL | Notas |
|---|---|---|
| Haikei | https://haikei.app | Generador de patrones vectoriales SVG ultraligeros |
| Pattern Monster | https://patternmonster.org | Generador de patrones SVG repetibles |
| Shader Gradient | https://shadergradient.co | Generador de malla de degradados 3D fluidos |
| Endless Tools | https://endlesstools.io | Generador de assets 3D, texto 3D y efectos en tiempo real |
| Unicorn Studio | https://unicorn.studio/inspiration | Efectos WebGL cinemáticos y shaders en tiempo real |
| Spline | https://spline.design | Diseño y renderizado 3D web interactivo en tiempo real |

### Tipografías, Iconos & Colores
| Recurso | URL | Notas |
|---|---|---|
| Fontshare | https://fontshare.com | Tipografías profesionales 100% gratuitas |
| React Icons | https://react-icons.github.io/react-icons/ | Bóveda unificada de iconos SVG para React |
| SVGL | https://svgl.app | Logos vectoriales SVG oficiales de tecnología y marcas |
| uiGradients | https://uigradients.com | Galería y generador de degradados CSS |
| Grainient Supply | https://grainient.supply | Colección de degradados con textura de grano analógico |

### Inspiración Visual & Copywriting
| Recurso | URL | Notas |
|---|---|---|
| H1 Gallery | https://h1gallery.com | Galería de titulares H1 y copywriting para Hero |
| Typographic Posters | https://typographicposters.com | Composición tipográfica artística y cartelismo suizo |
| OGFolio | https://ogfolio.com | Galería de tarjetas Open Graph |
| Flyerwrk | https://flyerwrk.com | Estudio de texturas analógicas, grano y estética brutalista |

### Prototipado & Variación
| Recurso | URL | Notas |
|---|---|---|
| Aura Build | https://aura.build | Generador y prototipador UI por IA |
| Variant | https://variant.com/community | Explorador y generador de variaciones UI |

### Misc
| Recurso | URL | Notas |
|---|---|---|
| Toggle Supply | https://toggle.supply | Colección de micro-interacciones de switches |
| Toolfolio | https://toolfolio.com | Metabuscador y directorio general de herramientas web |

### MCPs (Model Context Protocol)
| Recurso | URL | Notas |
|---|---|---|
| Magic MCP / 21st.dev | https://21st.dev | Inyección automatizada de componentes React |
| Craftwork MCP | https://craftwork.design | Búsqueda de assets e ilustraciones 3D |
| Refero MCP | https://refero.design | +150,000 pantallas reales de productos en producción |

### Frameworks
| Recurso | URL | Notas |
|---|---|---|
| Motion (Framer Motion) | https://motion.dev | Motor principal de animación frontend para React/Next.js |
| Impeccable Style | https://impeccable.style | Framework de vocabulario de diseño y antipatrones para IA |

---

## ✅ Tokens y Efectos Aplicados en la Web

### Paleta Gold — Token Exacto
| Token | Hex | Uso |
|---|---|---|
| `gold-50` | `#faf6ec` | Fondos muy sutiles |
| `gold-100` | `#f5edda` | Hover states suaves |
| `gold-200` | `#f0e6c8` | Texto hover de preguntas FAQ |
| `gold-300` | `#e8dcb4` | Texto de preguntas FAQ, subtítulos |
| `gold-400` | `#dfd0a4` | Acento principal — badges, iconos, bordes hover, LED pulsante |
| `gold-500` | `#c8b88a` | Bordes de cards, fondos de iconos (opacity 10-20%) |
| `gold-600` | `#b09e6e` | Bordes en hover más intensos |

### Specular Card (Borde Reflectante)
```
.specular-card::before {
  background: linear-gradient(135deg,
    rgba(255,255,255,0.25) 0%,
    rgba(223,208,164,0.15) 35%,
    rgba(255,255,255,0.03) 70%,
    transparent 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0.4;
}
```
Aplicado en: ServiceCard, Stats cards, DJI5ProSection, Navbar (scrolled), Hero tag, InstagramReelCard, FAQ items, ContactSection CTA.

### Grano Analógico Cinematográfico
```css
body::after {
  background-image: url("data:image/svg+xml,%3Csvg ... %3EfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' ... %3E/svg%3E");
  opacity: 0.025;
  mix-blend-mode: overlay;
}
```
Añade textura de grano 35mm sobre todo el fondo. También duplicado en HeroSection con opacidad 0.20.

### Blur-In Reveal (Animación de Entrada)
```css
@keyframes blurIn {
  from { opacity: 0; filter: blur(12px); transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; filter: blur(0px);  transform: translateY(0) scale(1); }
}
.animate-blur-in { animation: blurIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
```
Fallback CSS para cuando IntersectionObserver no se activa (alternativa a Framer Motion `whileInView`).

### Golden Hour & Titanium Text Gradients
- `.text-golden-hour`: `#ffffff → #e2e8f0 → #d4af37 → #b46e2d` (para H1 Hero)
- `.text-titanium`: `#ffffff → #cbd5e1 → #94a3b8` (para H2 Hero)

---

## ✍️ Tono y Voz — Decisiones de Contenido

- **Primera persona** ("Yo", "me encargo", "te respondo") — cercano y personal
- **Directo, sin jerga** — frases cortas, vocabulario llano
- **Sin letra pequeña** — respuestas transparentes que anticipan objeciones
- **Llamadas a la acción concretas** — "Escríbeme por WhatsApp", "Háblame directamente"
- **Toque local** — referencias a L'Hospitalet, Barcelona, Can Serra, barrios conocidos

### Estructura de FAQ (6 preguntas)
1. **Precio** — presupuesto cerrado sin compromiso
2. **Permisos + Seguro** — operador AESA, cero papeleo para el cliente
3. **Formato / Redes** — 4K + vertical para Instagram/TikTok + horizontal para portales
4. **Plazo de entrega** — 24-48h crudo, 3-5 días editado, exprés +50€
5. **Interiores FPV** — Cinewhoop protegido, planos imposibles
6. **Obras en construcción** — coordinación con jefe de obra, sin riesgo

### Colores FAQ
| Elemento | Clase | Color |
|---|---|---|
| Pregunta | `text-gold-300` hover `text-gold-200` | Dorado |
| Respuesta | `text-zinc-100` | Blanco suave (legible) |
| Tamaño pregunta | `text-lg sm:text-xl` | Grande |
| Tamaño respuesta | `text-base sm:text-lg` | Medio-grande |
