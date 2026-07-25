# Strict Deployment, Environment & Token Rules

## Context
The project is running strictly in a local development environment (`npm run dev` / `localhost`). 
Vercel deployment credits and build limits must be strictly preserved.

## Mandatory Restrictions
1. **NO AUTOMATIC PUSHES:** You are strictly forbidden from executing `git push`, `vercel`, or `vercel --prod` under any automated routine or sub-workflow.
2. **LOCAL ONLY:** Every codebase modification, compilation check, or component addition must happen and remain strictly within the local workspace.
3. **EXPLICIT OVERRIDE:** You are only allowed to execute deployment or remote repository commands if the user explicitly writes the exact phrase: *"Ejecuta push de fin de sesión"*. 

If any workflow attempts to trigger a remote deployment or push without this explicit trigger, you must immediately abort that step and notify the user that local execution is enforced.

## Explicit Confirmation Before Code Modifications
4. **NO AUTOMATIC CODE EDITS ON FEEDBACK/OPINIONS:** When the user shares feedback, text comparisons, or asks for an opinion/analysis, the agent MUST ONLY provide technical evaluation and present options (A/B/C). The agent is STRICTLY FORBIDDEN from modifying any codebase files until the user gives explicit confirmation or approval.
