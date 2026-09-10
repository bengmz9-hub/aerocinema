# 🔍 Stage 01: Findings — Síntesis de Investigación y Benchmark
*Entregable canónico de Stage 01 (`output/findings.md`) bajo metodología ICM.*

---

## 1. Misión y Requerimientos de Negocio Validados
* **Marca:** JF.DroneVision (Operador Técnico y Audiovisual de Drones).
* **Alcance Geográfico:** L'Hospitalet de Llobregat y Área Metropolitana de Barcelona.
* **Propuesta de Valor:**
  - **Hiperlocal y sin sobrecostes:** Base de operaciones directa en L'Hospitalet, permitiendo intervenciones rápidas sin tarifas excesivas de desplazamiento.
  - **Formato Vertical Nativo:** Captura directa con sensor 1" y rotación 225° orientada a redes sociales (Instagram Reels y TikTok) sin pérdida de resolución por recorte.
  - **Tarifas de Entrada Disruptivas:** Servicios paquetizados desde 35 € (foto) y 65-90 € (vídeo editado), reduciendo drásticamente la barrera de entrada para comercios locales y autónomos.

---

## 2. Marco Normativo y Operativo (AESA / EASA)
* **Categoría Operativa:** Subcategoría Abierta A1 (Reglamento Delegado UE 2019/945 y 2019/947).
* **Plataforma Principal:** DJI Mini 5 Pro con marcado de clase **C0** (< 249 g).
* **Operativa Urbana:** Vuelo en entornos poblados 100% legal bajo las directrices de AESA para aeronaves de menos de 250 gramos, sin sobrevolar concentraciones de personas ni áreas restringidas (CTR/Zonas Militares) sin previa coordinación.
* **Seguridad Jurídica:** Seguro de Responsabilidad Civil aeronáutico obligatorio activo y registro oficial de operador UAS en AESA.

---

## 3. Benchmark Competitivo (Radar BCN)
*Documento fuente completo: [`competitor-radar-bcn.md`](./competitor-radar-bcn.md)*

| Segmento | Equipo Típico | Tarifas de Referencia | Fricción para el Cliente | Oportunidad JF.DroneVision |
| :--- | :--- | :--- | :--- | :--- |
| **Grandes Productoras** | DJI Inspire / Mavic 3 Pro | 500 € – 1.200 € / día | Tiempos de entrega lentos, burocracia pesada, precios prohibitivos para pymes. | Agilidad de respuesta en <24h y precios un 70% menores. |
| **Fotógrafos Tradicionales** | DJI Air 2S / Mini 3 | 180 € – 350 € / sesión | Enfoque horizontal clásico; carecen de ritmo ágil de Reels. | Grabación vertical nativa 4K/60fps optimizada para algoritmo. |
| **Plataformas / Portales** | Variable | 120 € – 250 € + comisión | Trato impersonal, intermediarios y desconocimiento del territorio. | Trato directo de tú a tú por WhatsApp con piloto local. |

---

## 4. Benchmark Estético, UI/UX y Sistema Visual
*Documento fuente completo: [`design-inspiration.md`](./design-inspiration.md)*

* **Estética General:** Dark Luxury Cinemático (espacio profundo `#050505` con acentos dorado titanio `gold-400`).
* **Micro-interacciones:** Principios Emil Kowalski (muelle elástico `scale: 0.97`, feedback táctil, easing exponencial `cubic-bezier(0.16, 1, 0.3, 1)`).
* **Componentes Clave Inspirados:**
  - Hero inmersivo con cursor reactivo (Spotlight Cursor) y vídeo WebM optimizado.
  - Bento Grids interactivos para especificaciones de hardware (DJI Mini 5 Pro) y servicios.
  - Galería de Reels verticales con reproducción automática on-scroll estilo loop sin lag.
  - Isla Dinámica flotante (`MobileIsland.tsx`) para navegación con pulgar en dispositivos móviles.

---

## 5. Insumos Derivados hacia Stage 02 (Arquitectura)
1. **Contratos de Datos:** Formulario de presupuesto, validación RGPD, pasarela de WhatsApp estructurada.
2. **Tokens de Marca:** Paleta `@theme` consolidada en Tailwind v4 (`globals.css`) y `DESIGN.md`.
3. **Optimización de Assets:** Videos comprimidos en VP9/WebM bajo demanda sin buffers concurrentes pesados.
