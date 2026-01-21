CREATE TABLE providers (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100),
  available BOOLEAN DEFAULT true
);

CREATE TABLE bookings (
  id VARCHAR(50) PRIMARY KEY,
  customer_id VARCHAR(50),
  provider_id VARCHAR(50),
  service_type VARCHAR(100),
  status VARCHAR(30),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE booking_events (
  id VARCHAR(50) PRIMARY KEY,
  booking_id VARCHAR(50),
  old_status VARCHAR(30),
  new_status VARCHAR(30),
  actor VARCHAR(30),
  reason TEXT,
  timestamp TIMESTAMP
);
