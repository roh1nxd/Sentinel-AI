# Agent Logic Specification

## Overview

This document defines the decision-making logic of the Sentinel AI trading agent.

The agent is rule-based, deterministic, and designed for reliability over complexity.

---

## Agent Behavior

The agent runs continuously in a loop and performs the following steps:

1. Fetch current ETH price
2. Compare with previous price
3. Calculate percentage change
4. Decide action (BUY / SELL / HOLD)
5. Execute trade if needed
6. Log reasoning
7. Wait 60 seconds
8. Repeat

---

## Price Tracking

* Store last fetched price in memory
* On each cycle:

  * Fetch new price
  * Compute change %

Formula:

percentage_change = ((current_price - last_price) / last_price) * 100

---

## Decision Rules

### BUY Condition (Dip Strategy)

IF:
percentage_change ≤ -3%

THEN:

* Trigger BUY action

Reason:
Market dipped significantly → possible rebound opportunity

---

### SELL Condition (Pump Strategy)

IF:
percentage_change ≥ +4%

THEN:

* Trigger SELL action

Reason:
Market pumped → take profit

---

### STOP-LOSS Condition (Risk Management)

IF:
Current trade is in loss AND loss ≥ 2%

THEN:

* Trigger immediate SELL

Reason:
Prevent further loss

---

### HOLD Condition

IF:
No condition met

THEN:

* Do nothing

Reason:
Market stable / no clear signal

---

## Trade Execution Flow

Before executing any trade:

1. Call x402 payment function
2. Confirm payment success

Then:

3. Execute trade (BUY or SELL)

After:

4. Log trade result

---

## Logging Requirements

Each cycle must log:

* Current price
* Percentage change
* Decision taken
* Reason for decision
* Payment status
* Trade execution status

---

## Example Log Output

[12:00] Fetching price...
[12:00] Current Price: $3000
[12:00] Change: -3.2%

[12:00] Decision: BUY
[12:00] Reason: Price dropped more than 3%

[12:00] Initiating x402 payment...
[12:00] Payment successful

[12:01] Executing BUY trade...
[12:01] Trade successful ✅

---

## State Management

Maintain in memory:

* lastPrice
* currentPosition (BUY/SELL/NONE)
* entryPrice (for stop-loss calculation)

---

## Timing

* Agent runs every 60 seconds
* Must not overlap execution cycles

---

## Edge Cases

* First run: no previous price → skip decision
* API failure → log error and retry next cycle
* Payment failure → skip trade
* Trade failure → log and continue

---

## Constraints

* Keep logic simple
* Avoid overfitting strategies
* Focus on reliability

---

## Key Principle

"Clear logic > Complex intelligence"
