# Lighthouse Audit — DRONES Landing Page

> **Fecha:** 27 julio 2026
> **Proyecto:** JF.DroneVision — Fotografía/Vídeo aéreo con drones
> **Propósito:** Auditoría de rendimiento pre-optimización. Sin cambios realizados.

---

## Resumen de puntuaciones

| Métrica | Home | Aviso Legal | Objetivo |
|---------|------|-------------|----------|
| Performance | **91/100** ⭐⭐⭐⭐⭐ | **96/100** ⭐⭐⭐⭐⭐ | >90 |
| Accessibility | **91/100** ⭐⭐⭐⭐⭐ | **89/100** ⭐⭐⭐⭐ | >90 |
| Best Practices | **100/100** ⭐⭐⭐⭐⭐ | **100/100** ⭐⭐⭐⭐⭐ | >90 |
| SEO | **100/100** ⭐⭐⭐⭐⭐ | **100/100** ⭐⭐⭐⭐⭐ | >90 |

**Conclusión:** La landing está muy bien optimizada de base. SEO y Best Practices perfectos. Performance y Accessibility rozan el verde. Las mejoras sugeridas son para llevarlo a 95-100.

---

## Core Web Vitals (Home)

| Métrica | Valor | Evaluación | Límite |
|---------|-------|------------|--------|
| **FCP** (First Contentful Paint) | 2.0s | 🟡 Regular | Bueno <1.8s |
| **LCP** (Largest Contentful Paint) | 3.2s | 🟡 Regular | Bueno <2.5s |
| **TBT** (Total Blocking Time) | 2.6s | 🟡 Regular | Bueno <200ms |
| **CLS** (Cumulative Layout Shift) | — | ✅ Bueno | <0.1 |

---

## Hallazgos Críticos (Score 0)

Ordenados por impacto:

### 🔴 1. Payload de video masivo (~19 MB)

**Problema:** El peso total de red es **19,380 KiB (~19 MB)**, causado principalmente por los archivos `.webm` de video. Se descargan todos al cargar la página, aunque no sean visibles.

**Impacto:** Destroza el LCP (3.2s) y consume datos del usuario innecesariamente.

**Qué hacer:**
1. Añadir `poster` (imagen estática comprimida) al hero video
2. Poner `preload="none"` en tags `<video>` no visibles inicialmente
3. Implementar lazy loading real con `IntersectionObserver` para videos del portfolio
4. Comprimir `.webm` a <1 MB cada uno con FFmpeg/Handbrake

**Impacto esperado:** Payload de 19MB → <3MB, LCP de 3.2s → <1.5s

### 🔴 2. Render-blocking requests (ahorro potencial: 920ms)

**Problema:** Recursos externos bloquean la renderización inicial del HTML.

**Qué hacer:**
1. Usar `next/script` con `strategy="lazyOnload"` para scripts no críticos
2. Asegurar `font-display: swap;` en las fuentes

**Impacto esperado:** 920ms más rápido en paint inicial

### 🔴 3. Trabajo excesivo en main thread (2.6s)

**Problema:** Animaciones de Framer Motion procesándose al montar la página.

**Qué hacer:**
1. `initial={false}` en animaciones que no necesiten fade-in inmediato
2. Usar solo `x`, `y`, `scale`, `opacity` (GPU-accelerated) — evitar animar `width`, `height`, `top`, `left`
3. Añadir `willChange="transform, opacity"` en elementos animados persistentes

**Impacto esperado:** Main thread de 2.6s → <1s

---

## Issues de Accesibilidad

### 🟡 4. Botones sin nombre accesible

**Problema:** Botones/íconos sin `aria-label` que los describa para lectores de pantalla.

**Qué hacer:** Añadir `aria-label` a botones de icono (WhatsApp, menú hamburguesa, close modal, etc.)

### 🟡 5. Contraste de color insuficiente

**Problema:** Textos sobre fondos oscuros que no cumplen relación de contraste WCAG AA.

**Qué hacer:** Ajustar opacidad/color de textos sobre fondos degradados. Revisar especialmente textos en gold-400 sobre fondo oscuro.

---

## Cargas por recurso (Home)

| Recurso | Tamaño | Tipo |
|---------|--------|------|
| Videos .webm (varios) | **~15.5 MB** | Video |
| JS bundles | **~102 KB** shared | Script |
| Fonts (Cinzel, Cormorant, etc.) | ~200 KB | Font |
| Imágenes .webp | ~1.5 MB | Image |

---

## Próximos pasos sugeridos

1. **Optimizar videos** — prioridad máxima, mayor impacto
2. **Eliminar render-blocking** — ganancia rápida de 920ms
3. **Refinar animaciones Framer Motion** — liberar main thread
4. **Revisar contraste** — subir accesibilidad a 95+
5. **Segunda auditoría** tras cambios para verificar mejoras

---

*Auditoría realizada con Lighthouse 13.4.1 + gemma4:12b-it-qat (análisis local, 0 tokens API). Sin cambios en el código.*
