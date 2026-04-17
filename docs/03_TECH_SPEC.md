# Technical Specification

## Overview

This document defines the technologies, libraries, and standards used in building Sentinel AI.

The goal is to ensure:

* Consistency
* Simplicity
* Fast development
* Hackathon readiness

---

## Backend Stack

### Runtime

* Node.js (latest LTS)

### Framework

* Express.js

### Language

* JavaScript (no TypeScript for speed)

---

## Frontend Stack

### Framework

* React.js

### Approach

* Minimal UI
* No heavy styling frameworks required

---

## APIs & External Services

### Price Data API

* CoinGecko (free public API)

Example Endpoint:
https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd

---

### x402 Payment

* Used for programmatic payments
* Can be implemented as:

  * Mock function (for demo)
  * Real integration (if provided in starter repo)

---

### Blockchain Interaction

* Base Testnet
* Use provided SDK or ethers.js

---

## Backend Libraries

* express → API server
* dotenv → environment variables
* node-fetch / axios → API calls
* cors → enable frontend access
* helmet → basic security
* express-rate-limit → rate limiting

---

## Project Structure Standard

/backend
├── controllers/
├── routes/
├── services/
├── utils/
├── config/
└── server.js

/frontend
├── src/
└── components/

---

## Coding Standards

* Use modular structure
* Keep functions small and reusable
* Separate logic from routes
* Use async/await (no callbacks)

---

## Logging Standard

Logs must be:

* Clear
* Timestamped
* Human-readable

Example:
[12:01] Price fetched: $3000
[12:01] Change: -3.2%
[12:01] Decision: BUY
[12:01] Executing trade...

---

## Environment Variables

Store sensitive data in `.env` file:

PORT=3000
PRIVATE_KEY=your_wallet_key
API_URL=price_api_url

---

## Error Handling

* Use try-catch in all async functions
* Do not expose raw errors to users
* Log errors internally

---

## Security Basics

* No hardcoded secrets
* Use helmet middleware
* Add rate limiting
* Validate inputs

---

## Performance Constraints

* Agent loop every 60 seconds
* Avoid heavy computations
* Keep API responses fast

---

## Deployment (Optional)

* Backend: Render / Railway
* Frontend: Vercel

Not required for hackathon demo

---

## Key Principle

"Use simple, reliable tech — avoid unnecessary complexity"
