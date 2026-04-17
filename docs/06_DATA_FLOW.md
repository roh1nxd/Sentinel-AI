# Data Flow Specification

## Overview

This document explains how data flows through the Sentinel AI system from input to output.

It ensures clarity in:

* Execution flow
* Data movement
* System behavior

---

## High-Level Flow

1. User interacts with frontend
2. Frontend calls backend APIs
3. Backend controls agent
4. Agent fetches price data
5. Agent processes logic
6. Agent executes trade
7. Logs are generated
8. Logs sent back to frontend

---

## Detailed Flow

### Step 1: User Action

* User clicks "Start Agent" on frontend

Frontend → POST /start → Backend

---

### Step 2: Agent Initialization

Backend:

* Sets agent status = running
* Starts agent loop

---

### Step 3: Price Fetching

Agent:

* Calls external Price API (CoinGecko)
* Receives current ETH price

Data:
price = 3000

---

### Step 4: Data Processing

Agent:

* Compares current price with last price
* Calculates percentage change

Example:
lastPrice = 3100
currentPrice = 3000
change = -3.2%

---

### Step 5: Decision Making

Agent evaluates:

IF change ≤ -3 → BUY
IF change ≥ +4 → SELL
ELSE → HOLD

---

### Step 6: Payment Flow

Before trade:

Agent → x402 payment function

Result:

* success → continue
* failure → abort trade

---

### Step 7: Trade Execution

Agent:

* Calls trade execution function
* Executes BUY or SELL on blockchain (or simulated)

---

### Step 8: Logging

Agent generates logs at each step:

* Price fetched
* Change calculated
* Decision made
* Payment status
* Trade result

Logs stored in memory array

---

### Step 9: Frontend Fetch

Frontend:

* Calls GET /logs every 2 seconds
* Displays logs in UI

---

## Data Structures

### Price Object

{
"price": number
}

---

### Log Entry

"[timestamp] message"

Example:
"[12:00] Decision: BUY"

---

### Agent State

{
"running": boolean,
"lastPrice": number,
"position": "BUY" | "SELL" | "NONE"
}

---

## Error Flow

### API Failure

* Log error
* Skip cycle
* Retry next loop

---

### Payment Failure

* Log failure
* Do not execute trade

---

### Trade Failure

* Log error
* Continue next cycle

---

## Timing Flow

* Agent runs every 60 seconds
* Frontend fetches logs every 2 seconds

---

## Key Principle

"Clear data flow ensures predictable system behavior"
