# Stage: 03_desarrollo (Desarrollo & Implementacion)

## Mision
Implementacion del codigo fuente y cobertura de pruebas.

---

## Matriz de Carga de Contexto (Token Saver)
*Aplica este filtro estricto para evitar quemar tokens con informacion irrelevante.*

| Accion | Cargar Obligatoriamente (`Load These`) | Ignorar Explicitamente (`Skip These`) |
| :--- | :--- | :--- |
| **Ejecucion del Stage** | `stages/02_arquitectura/output/specs.md`, `_config/sop.md` | `stages/01_investigacion/`, `stages/04_qa_auditoria/` |

---

## Skills & Herramientas Recomendadas para este Stage

| Skill / Herramienta | Cuando Usar | Como Activar |
| :--- | :--- | :--- |
| `full-power-dev` | Ingenieria de software con reglas Senior Staff completas | Activar plugin / reglas de desarrollo |
| `rtk` | Ejecucion obligatoria de comandos, builds y linters | rtk <cmd> |

---

## Insumos (`inputs/`)
- Coloca aqui datos crudos, referencias, prompts o enlaces requeridos para este stage.

## Entregables Esperados (`output/`)
- `Codigo ejecutable verificado y tests pasando`

---

## Criterios de Aceptacion (DoD)
- [ ] Entregable generado exclusivamente dentro de `output/`.
- [ ] Verificado sin errores sintacticos ni dependencias faltantes.
- [ ] Validado estrictamente contra el contrato o especificacion del stage previo.
