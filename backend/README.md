# HomeServeX – Backend

## Features
- Booking lifecycle management
- Provider assignment & workflow
- Retry handling for failures
- Admin overrides
- Full event logging (observability)

## Run

npm install
npm run dev
Sample Flow
POST /api/bookings

Assign provider

Provider accepts → in_progress

Provider completes → completed

Statuses
pending → assigned → in_progress → completed
cancelled / failed (terminal)

