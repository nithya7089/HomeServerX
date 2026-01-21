# HomeServeX – Full Stack Assignment

## Overview
Mini on-demand home services platform with real booking lifecycle handling.

## Features
- Booking creation & tracking
- Provider assignment, accept, reject, complete
- Customer cancellations
- Retry & failure handling
- Admin overrides
- Full event timeline (observability)

## Tech
- Backend: Node.js, Express
- Frontend: React
- Data: In-memory (SQL schema included)

## Run
Backend:
npm install
npm run dev

Frontend:
npm install
npm run dev

## Status Flow
pending → assigned → in_progress → completed  
cancelled / failed (terminal)

## Why This Design
- Explicit state machine
- Separation of roles
- Audit-friendly event logs
- Real production patterns
