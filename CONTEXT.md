# DRONES - Orquestador Global (ICM)
<!--
CAPA 1 (El Mapa) + CAPA 2 (El Router).
Mantener este archivo bajo 100 lineas. No colocar especificaciones de codigo aqui.
-->

## Estado Operativo
* **Stage Activo:** `01_investigacion`
* **Fecha de Inicio:** 2026-09-10
* **Ultima Actualizacion:** 2026-09-10

---

## Enrutador Rapido de Tareas (Task Router)
*Identifica tu tarea y navega directo al stage correspondiente cargando unicamente sus recursos clave:*

| Tarea / Objetivo | Ir a (Stage Context) | Recursos a Cargar |
| :--- | :--- | :--- |
| **Retomar tras una pausa / Status** | `STATUS.md` | `STATUS.md` (Ultima accion y siguiente paso) |
| **Investigacion & Benchmark** | `stages/01_investigacion/CONTEXT.md` | `stages/01_investigacion/inputs/`, `shared/glossary.md` |
| **Arquitectura & Especificaciones** | `stages/02_arquitectura/CONTEXT.md` | `stages/01_investigacion/output/findings.md`, `_config/sop.md`, `shared/glossary.md` |
| **Desarrollo & Implementacion** | `stages/03_desarrollo/CONTEXT.md` | `stages/02_arquitectura/output/specs.md`, `_config/sop.md` |
| **QA, Auditoria & Entrega** | `stages/04_qa_auditoria/CONTEXT.md` | `stages/03_desarrollo/output/`, `stages/02_arquitectura/output/specs.md` (como contrato), `_config/sop.md` |

---

## Maquina de Estados (Pipeline)

| Stage | Condicion de Entrada | Entregable Esperado (`output/`) | Estado |
| :--- | :--- | :--- | :---: |
| **01_investigacion** | Inicio del proyecto | `findings.md con fuentes y requerimientos validados` | En curso |
| **02_arquitectura** | `01_investigacion` completado | `specs.md con diagramas y decisiones de diseno` | Pendiente |
| **03_desarrollo** | `02_arquitectura` completado | `Codigo ejecutable verificado y tests pasando` | Pendiente |
| **04_qa_auditoria** | `03_desarrollo` completado | `audit_report.md y walkthrough final` | Pendiente |

---

## Convenciones de Nombrado y Colocacion
* **Prohibido:** Crear archivos de codigo sueltos en la raiz del proyecto.
* **Formatos:** `YYYY-MM-DD_<nombre_kebab>.<ext>` para logs/auditorias; nombres semanticos para modulos.
* **Archivos Compartidos:** Usar estrictamente `shared/` para configuraciones, glosarios o contratos globales.

---

## Protocolo ICM Obligatorio
1. **Walk Test:** Todo agente se orienta leyendo unicamente este archivo y el `CONTEXT.md` del stage activo.
2. **Aislamiento:** Escribir resultados **estrictamente** en `stages/<stage_activo>/output/`.
3. **Continuidad:** Actualizar `STATUS.md` al concluir cada sesion (ultima accion, siguiente paso y bloqueadores).
4. **Transicion:** Al cumplir el DoD del stage, marcar en la tabla como `Hecho`, encender el siguiente con `En curso` y actualizar **Stage Activo**.
