# TASK HANDOFF: Conexión de Formulario de Contacto a Resend API

**Asignado a:** Hermes Agent (DeepSeek API) / OpenCode Local  
**Fecha:** 2026-07-26  
**Severidad/Prioridad:** Alta  

---

## 🎯 Objetivo de la Tarea
Actualizar la Server Action `src/app/actions/contact.ts` para enviar correos electrónicos reales utilizando el servicio **Resend** (o fallback de desarrollo si no existe `RESEND_API_KEY`).

---

## 📋 Instrucciones Paso a Paso para el Agente

### 1. Instalación de Dependencias (solo si falta)
Verifica si `resend` está en `package.json`. Si no está presente, instala el paquete:
```bash
npm install resend
```

### 2. Actualización de `.env.example`
Asegúrate de agregar las variables necesarias en `.env.example` (sin valores reales):
```env
RESEND_API_KEY=re_123456789...
EMAIL_FROM=contacto@jfdronevision.com
EMAIL_TO=jose@jfdronevision.com
```

### 3. Modificación de `src/app/actions/contact.ts`
Implementa la integración con la librería `resend`:
- Importa `Resend` desde `"resend"`.
- Lee `process.env.RESEND_API_KEY`.
- **Modo Fallback/Dev**: Si `process.env.RESEND_API_KEY` no está configurada, realiza la simulación del `setTimeout(1000)` e imprime un `console.log` defensivo. NO lanzar error para no romper la experiencia en dev local.
- **Modo Producción**: Si existe `RESEND_API_KEY`, envía el correo con la siguiente estructura de HTML/Texto simple:
  - **From:** `process.env.EMAIL_FROM` (o `onboarding@resend.dev` si es cuenta de prueba Resend)
  - **To:** `process.env.EMAIL_TO`
  - **Subject:** `[NUEVO PROYECTO] ${data.type} - ${data.name}`
  - **Body:** Nombre, Email, Tipo de Proyecto y Detalles.

### 4. Manejo Defensivo de Errores y Tipado
- Mantener tipado estricto (TypeScript). Cero `any`.
- Retornar `{ success: true }` o `{ success: false, error: string }`.
- Comentarios explicativos en español.

---

## 🛑 Restricciones & Reglas del Proyecto
1. **PROHIBIDO** hardcodear API Keys en el código.
2. **PROHIBIDO** modificar `ContactModal.tsx` u otros componentes cliente si no es estrictamente necesario.
3. No realizar `git push` ni despliegues remotos.
