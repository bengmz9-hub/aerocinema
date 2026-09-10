# Stage: 04_qa_auditoria (QA, Auditoria & Entrega)

## Mision
Auditoria de seguridad, verificacion de calidad y documentacion final.

---

## Matriz de Carga de Contexto (Token Saver)
*Aplica este filtro estricto para evitar quemar tokens con informacion irrelevante.*

| Accion | Cargar Obligatoriamente (`Load These`) | Ignorar Explicitamente (`Skip These`) |
| :--- | :--- | :--- |
| **Ejecucion del Stage** | `stages/03_desarrollo/output/`, `stages/02_arquitectura/output/specs.md` (como contrato), `_config/sop.md` | `stages/01_investigacion/inputs/` |

---

## Skills & Herramientas Recomendadas para este Stage

| Skill / Herramienta | Cuando Usar | Como Activar |
| :--- | :--- | :--- |
| `code-reviewer` | Revision pre-merge, deteccion de bugs y leaks de secretos | Invocar subagent code-reviewer |
| `cybersec-auditor` | Auditoria de seguridad, hardening e integridad | Invocar subagent cybersec-auditor |
| `red-team-auditor` | Revision adversarial, supuestos y casos de fallo | Invocar subagent red-team-auditor |

---

## Auditoría Anti-Slop & Calidad Estructural (Thermonuclear Standard)
- **Tolerancia Cero a Opcionalidad Injustificada:** Verificar que no se hayan introducido parámetros, props o campos opcionales (`?` o `None`) para evitar actualizar llamadores. Si la lógica interna los necesita, deben ser obligatorios.
- **Movimientos Code Judo:** Ante wrappers, adaptadores o código intermediario engorroso, evaluar si es posible eliminar capas completas modificando el modelo o contrato base.

---

## Insumos (`inputs/`)
- Coloca aqui datos crudos, referencias, prompts o enlaces requeridos para este stage.

## Entregables Esperados (`output/`)
- `audit_report.md y walkthrough final`

---

## Criterios de Aceptacion (DoD)
- [x] Entregable generado exclusivamente dentro de `output/` (`audit_report.md`).
- [x] Verificado sin errores sintacticos ni dependencias faltantes (`next build` OK).
- [x] Validado estrictamente contra el contrato o especificacion del stage previo (`specs.md`).
- [x] Anti-Slop Check: Sin parámetros opcionales injustificados añadidos por comodidad.
- [x] Code Judo Check: Verificado que no se añadieron wrappers o abstracciones innecesarias.
