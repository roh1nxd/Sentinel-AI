# API Specification

## Overview

This document defines all backend API endpoints for Sentinel AI.

These APIs will:

* Control the agent (start/stop)
* Provide system status
* Return logs for frontend display

All responses must be in JSON format.

---

## Base URL

http://localhost:3000

---

## Endpoints

---

### 1. GET /status

#### Description

Returns current agent status

#### Response

{
"status": "running" | "stopped"
}

---

### 2. POST /start

#### Description

Starts the trading agent loop

#### Response

{
"message": "Agent started successfully"
}

---

### 3. POST /stop

#### Description

Stops the trading agent loop

#### Response

{
"message": "Agent stopped successfully"
}

---

### 4. GET /logs

#### Description

Returns all agent logs

#### Response

{
"logs": [
"[12:00] Fetching price...",
"[12:00] Decision: BUY",
"[12:01] Trade successful"
]
}

---

### 5. GET /price (optional)

#### Description

Returns current ETH price

#### Response

{
"price": 3000
}

---

## Response Standards

* Always return JSON
* Use clear keys
* Avoid unnecessary nesting

---

## Error Handling

On error:

{
"error": "Something went wrong"
}

Rules:

* Do not expose internal errors
* Log detailed errors internally only

---

## HTTP Status Codes

* 200 → Success
* 400 → Bad request
* 500 → Server error

---

## Headers

Content-Type: application/json

---

## API Behavior Rules

* /start should not start multiple loops
* /stop should safely stop execution
* /logs should return latest logs
* APIs must be fast and lightweight

---

## Future Scope (Not Required)

* Authentication
* WebSockets for live logs
* Multi-user support

---

## Key Principle

"Simple, predictable APIs make debugging and frontend integration easy"
