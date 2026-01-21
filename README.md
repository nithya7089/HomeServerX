# HomeServEx – Backend

Backend service for an on-demand home services booking platform.

##  Features
- Create bookings
- Auto-assign provider (if available)
- Provider workflow (accept, reject, complete)
- Customer cancellation
- Admin override & delete
- Booking lifecycle events (audit log)
- In-memory storage (no DB)

## Tech Stack
- Node.js
- Express.js
- In-memory data models
- REST APIs

## Folder Structure
src/
├─ controllers/
├─ routes/
├─ models/
├─ app.js
├─ server.js

##  How to Run

cd backend
npm install
npm run dev
Backend runs on:
http://localhost:5001

## API Endpoints
Booking
POST /api/bookings → create booking
GET /api/bookings → list bookings
GET /api/bookings/:id → booking details

## Provider
GET /api/providers/:id/bookings
POST /api/providers/booking/:id/accept
POST /api/providers/booking/:id/complete
POST /api/providers/booking/:id/reject

## Customer
POST /api/customers/booking/:id/cancel

## Admin
GET /api/admin/bookings
POST /api/admin/booking/:id/override
GET /api/admin/booking/:id/events
DELETE /api/admin/booking/:id


## HomeServEx – Frontend
React frontend for an on-demand home services marketplace.

## Features
Create booking

Access booking by ID

Provider dashboard

Booking status tracking

Event history view

Customer cancel

Admin panel (override / delete)

Clean, modern UI (pure CSS)

## Tech Stack
React (Vite)

React Router

Fetch API

Custom CSS (no UI library)

## How to Run
cd frontend
npm install
npm run dev
Frontend runs on:
http://localhost:5173

## Pages & Routes
Create Booking /
Access Booking /access
Booking Details /booking/:id
Booking Events /booking/:id/events
Provider Dashboard /provider/p1
Admin Panel /admin
Cancel Booking /cancel
Delete Booking /delete

## UI
Single shared CSS file

Responsive, professional styling

Status badges for lifecycle clarity

