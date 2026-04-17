# Task Breakdown (Implementation Plan)

## Overview

This document defines the exact step-by-step implementation plan for building Sentinel AI.

The system MUST be built in the given order.

Each step should be completed and tested before moving to the next.

---

## Phase 1: Backend Setup

### Step 1: Initialize Backend Project

* Setup Node.js project
* Install dependencies:

  * express
  * dotenv
  * cors
  * helmet
  * express-rate-limit
  * axios or node-fetch

---

### Step 2: Create Server

* Create server.js
* Setup Express app
* Add middleware:

  * JSON parser
  * CORS
  * Helmet
  * Rate limiter
* Start server on PORT

---

### Step 3: Create Folder Structure

/backend
├── controllers/
├── routes/
├── services/
├── utils/
├── config/

---

## Phase 2: API Development

### Step 4: Create Routes

* /status
* /start
* /stop
* /logs

---

### Step 5: Create Controllers

* statusController
* agentController
* logsController

---

## Phase 3: Core Agent Logic

### Step 6: Implement Price Service

* Fetch ETH price from CoinGecko API
* Return price

---

### Step 7: Implement Strategy Logic

* Calculate percentage change
* Apply rules:

  * -3% → BUY
  * +4% → SELL
  * else HOLD

---

### Step 8: Implement Trade Service

* Create function:
  executeTrade(action)
* Simulate or connect to blockchain

---

### Step 9: Implement Payment Service

* Create function:
  payWithX402()
* Can be mock or real

---

### Step 10: Implement Logger

* Store logs in array
* Add timestamp to each log

---

## Phase 4: Agent Engine

### Step 11: Create Agent Loop

* Run every 60 seconds
* Steps:

  1. Fetch price
  2. Calculate change
  3. Decide action
  4. Pay via x402
  5. Execute trade
  6. Log everything

---

### Step 12: Agent Control

* Start agent (setInterval)
* Stop agent (clearInterval)

---

## Phase 5: Integration

### Step 13: Connect APIs to Agent

* /start → start loop
* /stop → stop loop
* /logs → return logs

---

### Step 14: Handle Edge Cases

* First run (no last price)
* API failure
* Payment failure
* Trade failure

---

## Phase 6: Testing

### Step 15: Manual Testing

* Start agent
* Check logs
* Simulate price change
* Verify decision logic

---

### Step 16: Logging Verification

* Ensure logs are:

  * Clear
  * Sequential
  * Informative

---

## Phase 7: Frontend (Optional but Recommended)

### Step 17: Create React App

* Basic setup

---

### Step 18: Build Dashboard

* Start/Stop buttons
* Logs display
* Status indicator

---

## Final Step

### Step 19: Final Cleanup

* Refactor code
* Improve logs
* Ensure no crashes
* Prepare demo

---

## Rules

* Do not skip steps
* Keep code modular
* Test after each phase
* Prioritize working system over perfection

---

## Key Principle

"Build step-by-step, test continuously, keep it simple"
