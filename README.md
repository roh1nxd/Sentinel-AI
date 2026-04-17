# Sentinel AI

Emotionless autonomous trading demo agent with a Node.js backend and React dashboard.

## Project Structure

- `docs` - planning and specifications
- `backend` - API server and agent logic
- `frontend` - dashboard UI

## Setup

### Backend

1. `cd backend`
2. Copy `.env.example` to `.env`
3. `npm install`
4. `npm start`

Backend runs on `http://localhost:3000`.
For faster demo cycles, keep `AGENT_INTERVAL_MS=5000` (or lower) in `backend/.env`.

### Frontend

1. `cd frontend`
2. `npm install`
3. `npm run dev`

Frontend runs on `http://localhost:5173`.

## API Endpoints

- `GET /status`
- `POST /start`
- `POST /stop`
- `GET /logs`
- `GET /price`
