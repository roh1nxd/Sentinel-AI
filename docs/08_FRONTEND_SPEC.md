# Frontend Specification

## Overview

This document defines the frontend requirements for Sentinel AI.

The goal is to build a **minimal, clean, and functional dashboard** that:

* Controls the agent
* Displays logs
* Shows system status

No complex UI or heavy design is required.

---

## Tech Stack

* React.js
* Fetch API (for backend communication)
* Basic CSS (no heavy frameworks required)

---

## Layout

Single-page dashboard with 3 main sections:

1. Header
2. Controls Panel
3. Logs Panel

---

## Components

### 1. Header

Displays:

* App Name: "Sentinel AI"
* Tagline: "Emotionless Autonomous Trading"

---

### 2. Status Display

Shows:

* Agent Status: Running / Stopped

Example:
Status: 🟢 Running
Status: 🔴 Stopped

---

### 3. Control Buttons

Buttons:

* Start Agent
* Stop Agent

Actions:

* Start → POST /start
* Stop → POST /stop

---

### 4. Logs Panel (Most Important)

Displays:

* Real-time logs from backend

Behavior:

* Fetch logs every 2 seconds
* Show latest logs at top or bottom
* Auto-scroll enabled

Example:
[12:00] Fetching price...
[12:00] Decision: BUY
[12:01] Trade successful

---

### 5. Price Display (Optional)

Show:

* Current ETH price

Source:

* GET /price (if implemented)

---

## State Management

Use React state:

* status
* logs[]
* price (optional)

---

## API Integration

### Fetch Status

GET /status

---

### Start Agent

POST /start

---

### Stop Agent

POST /stop

---

### Fetch Logs

GET /logs (every 2 seconds)

---

## UI Behavior

* On page load:

  * Fetch status
  * Start polling logs

* On "Start":

  * Call API
  * Update status

* On "Stop":

  * Call API
  * Update status

---

## Styling Guidelines

* Keep it clean and minimal
* Dark or light theme (any)
* Use spacing and readable fonts
* No heavy animations required

---

## Error Handling

* Show simple error messages
* Do not crash UI

---

## Performance

* Keep rendering efficient
* Avoid unnecessary re-renders

---

## Non-Goals

* No authentication
* No user accounts
* No complex charts
* No multi-page routing

---

## Demo Focus

Frontend should:

* Clearly show logs
* Respond to start/stop
* Look clean and understandable

---

## Key Principle

"Clarity > Fancy UI"
