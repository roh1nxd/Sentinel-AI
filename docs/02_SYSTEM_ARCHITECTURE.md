# System Architecture

## Overview

Sentinel AI is a simple autonomous trading system built with a clear separation of concerns:

Frontend (React Dashboard)
→ Backend API (Node.js + Express)
→ Agent Engine (Core Logic)
→ External Services (Price API, x402, Blockchain)

---

## High-Level Flow

1. Frontend sends request to backend (start/stop/status)
2. Backend controls agent lifecycle
3. Agent fetches price data from external API
4. Agent evaluates strategy conditions
5. If conditions met:

   * Calls x402 payment
   * Executes trade on blockchain
6. Logs are generated and stored
7. Frontend fetches and displays logs

---

## Core Components

### 1. Frontend (React)

Purpose:

* Display agent status
* Show real-time logs
* Provide Start/Stop controls

Key Features:

* Dashboard UI
* Logs panel (auto-refresh)
* Status indicator

---

### 2. Backend (Node.js + Express)

Purpose:

* Expose APIs
* Manage agent lifecycle
* Serve logs

Responsibilities:

* Handle HTTP requests
* Start/stop agent loop
* Store and return logs

---

### 3. Agent Engine (Core System)

Purpose:

* Perform autonomous trading decisions

Modules:

* Price Service (fetch price)
* Strategy Engine (decision logic)
* Trade Executor (execute trades)
* Payment Handler (x402)
* Logger (record actions)

---

### 4. External Services

#### Price API

* Source: CoinGecko (or similar)
* Provides real-time ETH price

#### x402 Payment Layer

* Used before trade execution
* Handles programmatic payments

#### Blockchain (Base Testnet)

* Executes token swaps
* Simulated or real trade

---

## Internal Architecture (Backend)

Request Flow:

Route → Controller → Service → Utility

Example:
GET /logs → logsController → logsService → logger utility

---

## Agent Loop Design

The agent runs in a loop:

1. Fetch price
2. Compare with previous price
3. Calculate percentage change
4. Apply strategy rules
5. Execute actions if needed
6. Log all steps
7. Wait 60 seconds
8. Repeat

---

## Data Storage

For hackathon simplicity:

* Logs stored in memory (array)

Optional (not required):

* Database (MongoDB, etc.)

---

## Scalability (Future Scope)

* Multi-token support
* Advanced strategies
* Persistent database
* Real-time websockets

---

## Design Principles

* Keep modules independent
* Avoid tight coupling
* Keep logic inside services
* Maintain clear separation of concerns

---

## Key Takeaway

This system is designed to be:

* Simple
* Modular
* Easy to extend
* Reliable for demo
