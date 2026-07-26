# Strict Deployment, Environment & Token Rules

## MANDATORY RULE #1: ALWAYS DELEGATE FIRST TO HERMES DEEPSEEK
1. **ABSOLUTE PRIORITY - HERMES DELEGATION:** Every task execution, code modification, refactoring, audit, or creation MUST BE DELEGATED FIRST to Hermes Agent CLI (`hermes chat -q "..."`) using DeepSeek API (DeepSeek V4 Flash for quick edits, DeepSeek V4 Pro for complex logic). Antigravity is STRICTLY FORBIDDEN from writing or editing code directly with its own edit tools without executing it via Hermes CLI first. Always invoke via `run_command` so the prompt and real-time outputs are visible in the shell terminal/CMD.

## Mandatory Restrictions
2. **NO AUTOMATIC PUSHES:** You are strictly forbidden from executing `git push`, `vercel`, or `vercel --prod` under any automated routine or sub-workflow.
3. **LOCAL ONLY:** Every codebase modification, compilation check, or component addition must happen and remain strictly within the local workspace.
4. **EXPLICIT OVERRIDE:** You are only allowed to execute deployment or remote repository commands if the user explicitly writes the exact phrase: *"Ejecuta push de fin de sesión"*. 

If any workflow attempts to trigger a remote deployment or push without this explicit trigger, you must immediately abort that step and notify the user that local execution is enforced.

## Explicit Confirmation Before Code Modifications
5. **NO AUTOMATIC CODE EDITS ON FEEDBACK/OPINIONS:** When the user shares feedback, text comparisons, or asks for an opinion/analysis, the agent MUST ONLY provide technical evaluation and present options (A/B/C). The agent is STRICTLY FORBIDDEN from modifying any codebase files until the user gives explicit confirmation or approval.

## Strict Local AI Delegation & Anti-Deception Rule
6. **NO SILENT CODE FALLBACKS ON DELEGATED TASKS:** When the user requests to delegate a task to local AI tools (Hermes, OpenCode, Ollama, Qwen, Gemma), Antigravity is STRICTLY FORBIDDEN from silently editing files using its own code edit tools (`replace_file_content`, `write_to_file`) to simulate the work. If a local command fails or requires interactive CLI execution, Antigravity MUST report the exact status or output the prompt for the user to execute in their local CLI. Never fake local execution.


