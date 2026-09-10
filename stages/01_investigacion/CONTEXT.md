# Stage: 01_investigacion (Investigacion & Benchmark)

## Mision
Recopilacion de requisitos, benchmark, transcripciones y estado del arte.

---

## Matriz de Carga de Contexto (Token Saver)
*Aplica este filtro estricto para evitar quemar tokens con informacion irrelevante.*

| Accion | Cargar Obligatoriamente (`Load These`) | Ignorar Explicitamente (`Skip These`) |
| :--- | :--- | :--- |
| **Ejecucion del Stage** | `stages/01_investigacion/inputs/`, `shared/glossary.md` | `stages/02_arquitectura/`, `stages/03_desarrollo/`, `stages/04_qa_auditoria/` |

---

## Skills & Herramientas Recomendadas para este Stage

| Skill / Herramienta | Cuando Usar | Como Activar |
| :--- | :--- | :--- |
| `research / defuddle` | Extraccion y sintesis de fuentes externas / web | Invocar subagent research o herramienta defuddle |
| `read_url_content / search_web` | Busqueda de APIs, documentacion y estado del arte | Llamadas de busqueda dirigida |

---

## Insumos (`inputs/`)
- Coloca aqui datos crudos, referencias, prompts o enlaces requeridos para este stage.

## Entregables Esperados (`output/`)
- `findings.md con fuentes y requerimientos validados`

---

## Criterios de Aceptacion (DoD)
- [x] Entregable generado exclusivamente dentro de `output/` (`findings.md`).
- [x] Verificado sin errores sintacticos ni dependencias faltantes.
- [x] Validado estrictamente contra el contrato o especificacion del stage previo.
