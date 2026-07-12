# Strict Deployment & Environment Rules

## Context
The project is running strictly in a local development environment (`npm run dev` / `localhost`). 
Vercel deployment credits and build limits must be strictly preserved.

## Mandatory Restrictions
1. **NO AUTOMATIC PUSHES:** You are strictly forbidden from executing `git push`, `vercel`, or `vercel --prod` under any automated routine or sub-workflow.
2. **LOCAL ONLY:** Every codebase modification, compilation check, or component addition must happen and remain strictly within the local workspace.
3. **EXPLICIT OVERRIDE:** You are only allowed to execute deployment or remote repository commands if the user explicitly writes the exact phrase: *"Ejecuta push de fin de sesión"*. 

If any workflow attempts to trigger a remote deployment or push without this explicit trigger, you must immediately abort that step and notify the user that local execution is enforced.
