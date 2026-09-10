# Stage: 02_arquitectura (Arquitectura & Especificaciones)

## Mision
Diseno de especificaciones tecnicas, contratos de datos y componentes.

---

## Matriz de Carga de Contexto (Token Saver)
*Aplica este filtro estricto para evitar quemar tokens con informacion irrelevante.*

| Accion | Cargar Obligatoriamente (`Load These`) | Ignorar Explicitamente (`Skip These`) |
| :--- | :--- | :--- |
| **Ejecucion del Stage** | `stages/01_investigacion/output/findings.md`, `_config/sop.md`, `shared/glossary.md` | `stages/01_investigacion/inputs/`, `stages/03_desarrollo/`, `stages/04_qa_auditoria/` |

---

## Skills & Herramientas Recomendadas para este Stage

| Skill / Herramienta | Cuando Usar | Como Activar |
| :--- | :--- | :--- |
| `planner` | Desglose estructurado de componentes y criterios de aceptacion | Invocar subagent planner |
| `prompt-architect` | Formalizacion de especificaciones tecnicas y esquemas de datos | Definicion de contratos |
| `crafter / generative_ui` | Spike-First: prototipos rapidos descartables (A/B) para disipar ambiguedad en UI/APIs | Generar widget/spike en scratch/ o inputs/spikes/ |

---

## Regla del 80% (Spec-First por Feature)
Para cada funcionalidad compleja, desglosa antes de programar en `output/features/<feature_name>/`:
1. `[feature]-requirements.md`: Qué hace y criterios de aceptación.
2. `[feature]-design.md`: Contratos de interfaz, esquema y flujo de datos.
3. `[feature]-tasks.md`: Lista ordenada de tareas atómicas para 1 sesión.
*Prohibido escribir código en etapa 03 sin alcanzar el 80% de definición en su spec.*

---

## Regla Spike-First (Throwaway Prototype)
Ante incertidumbre en UI/UX, animaciones complejas o integración de APIs desconocidas:
- **Prohibido teorizar en markdown:** No redactes especificaciones extensas sobre comportamiento interactivo sin validar.
- **Genera un Spike rápido:** Crea prototipos descartables (variantes A/B) en `scratch/` o `stages/02_arquitectura/inputs/spikes/` usando `crafter` o `generative_ui`.
- **Decide y descarta:** Evalúa cuál opción se siente correcta, extrae la decisión final a `specs.md` o al `[feature]-design.md`, y descarta el spike (no va a producción).

---

## Insumos (`inputs/`)
- Coloca aqui datos crudos, referencias, prompts o enlaces requeridos para este stage.

## Entregables Esperados (`output/`)
- `specs.md con diagramas y decisiones de diseno`

---

## Criterios de Aceptacion (DoD)
- [ ] Entregable generado exclusivamente dentro de `output/`.
- [ ] Verificado sin errores sintacticos ni dependencias faltantes.
- [ ] Validado estrictamente contra el contrato o especificacion del stage previo.
