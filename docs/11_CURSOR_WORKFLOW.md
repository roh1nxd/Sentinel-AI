# Cursor Workflow Guide (Execution Strategy)

## Overview

This document defines how to use Cursor effectively to build Sentinel AI step-by-step.

Cursor should NOT build everything at once.

Instead, it must follow a structured, phase-based approach.

---

## Phase 1: Context Understanding

### Files to Read:

* 01_PRD.md
* 02_SYSTEM_ARCHITECTURE.md
* 03_TECH_SPEC.md
* 04_AGENT_LOGIC.md

### Instruction to Cursor:

"Read all files in /docs and summarize the system before coding."

### Goal:

* Understand product
* Understand architecture
* Understand agent logic

### Automation Level:

100% (no manual intervention required)

---

## Phase 2: Backend Development

### Files to Use:

* 07_TASK_BREAKDOWN.md
* 05_API_SPEC.md
* 04_AGENT_LOGIC.md

### Instructions:

Step-by-step execution ONLY.

Example:
"Implement Step 1 from TASK_BREAKDOWN.md"
"Implement Step 2"
...

### Rules:

* Do not skip steps
* Complete one step before moving to next

### Goal:

* Setup backend
* Create APIs
* Implement agent logic

### Automation Level:

70–80%

### Manual Checks Required:

* Folder structure is correct
* APIs match API_SPEC.md
* No unnecessary complexity

---

## Phase 3: Agent Logic Verification

### Files to Use:

* 04_AGENT_LOGIC.md
* 06_DATA_FLOW.md

### Instruction:

"Ensure implementation strictly follows AGENT_LOGIC.md and DATA_FLOW.md."

### Goal:

* Correct BUY/SELL logic
* Proper flow execution
* Clear logs

### Automation Level:

50%

### Manual Checks Required:

* Percentage calculation is correct
* Conditions trigger correctly
* Logs are readable and meaningful

---

## Phase 4: Code Quality & Security

### Files to Use:

* 03_TECH_SPEC.md

### Instructions:

"Refactor code to follow modular architecture."
"Check code for OWASP Top 10 basic vulnerabilities."

### Goal:

* Clean structure
* Basic security

### Automation Level:

80%

---

## Phase 5: Frontend Development

### Files to Use:

* 08_FRONTEND_SPEC.md
* 05_API_SPEC.md

### Instruction:

"Create a minimal React dashboard based on FRONTEND_SPEC.md."

### Goal:

* Functional UI
* Logs display
* Start/Stop controls

### Automation Level:

90%

### Manual Checks Required:

* Logs update properly
* Buttons work correctly

---

## Phase 6: Testing

### Files to Use:

* 06_DATA_FLOW.md
* 09_ENV_SETUP.md

### Tasks:

* Start agent
* Verify logs
* Trigger conditions
* Check trade execution

### Automation Level:

0%

### Manual Work Required:

* Run system
* Validate behavior

---

## Phase 7: Demo Preparation

### File to Use:

* 10_DEMO_FLOW.md

### Tasks:

* Practice demo
* Ensure smooth execution
* Prepare explanation

### Automation Level:

0%

---

## Critical Rules

1. Do NOT ask Cursor to build full project in one prompt
2. Always use step-by-step commands
3. Validate output after each step
4. Keep system simple and reliable
5. Prioritize working demo over perfection

---

## Recommended Prompt Sequence

1. "Read all docs and summarize system"
2. "Implement Step 1 from TASK_BREAKDOWN.md"
3. "Implement Step 2"
4. Continue step-by-step
5. "Refactor code for modularity"
6. "Check for security issues"
7. "Build frontend based on FRONTEND_SPEC.md"

---

## Key Principle

"Cursor builds fast, but correctness comes from structured guidance."
