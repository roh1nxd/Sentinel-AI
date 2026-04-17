# Environment Setup Guide

## Overview

This document explains how to set up and run the Sentinel AI project locally.

---

## Prerequisites

Make sure the following are installed:

* Node.js (v18 or above)
* npm (comes with Node.js)
* Git

---

## Project Setup

### Step 1: Clone Repository (if needed)

git clone <repo-url>
cd sentinel-agent

---

### Step 2: Setup Backend

cd backend

Install dependencies:
npm install

---

### Step 3: Create Environment File

Create a `.env` file inside /backend:

PORT=3000
PRIVATE_KEY=your_wallet_private_key
PRICE_API_URL=https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd

---

### Step 4: Run Backend

node server.js

Expected Output:
Server running on port 3000

---

### Step 5: Setup Frontend

cd ../frontend

Install dependencies:
npm install

---

### Step 6: Run Frontend

npm start

Expected:
Frontend runs on http://localhost:3000 or http://localhost:3001

---

## API Base URL

Backend:
http://localhost:3000

Frontend should connect to this URL

---

## Testing the Setup

### Test Backend

Open browser or Postman:

GET http://localhost:3000/status

Expected Response:
{
"status": "stopped"
}

---

### Test Agent

1. Call POST /start
2. Check logs via GET /logs
3. Confirm logs are updating

---

## Common Issues

### Port Already in Use

* Change PORT in .env

---

### API Not Working

* Check internet connection
* Verify API URL

---

### Logs Not Updating

* Ensure agent is started
* Check console for errors

---

## Environment Variables Summary

PORT → Server port
PRIVATE_KEY → Wallet key (do not expose)
PRICE_API_URL → Price API endpoint

---

## Security Notes

* Never commit `.env` file
* Keep private keys secure
* Use testnet for safety

---

## Key Principle

"Setup should be fast, simple, and error-free"
