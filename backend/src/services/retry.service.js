const { providers } = require("../models/provider.model");
const { bookings } = require("../models/booking.model");
const { BookingEvent, bookingEvents } = require("../models/bookingEvent.model");

const MAX_RETRIES = 2;
const retryCount = {};

function logEvent(bookingId, oldStatus, newStatus, actor, reason) {
  bookingEvents.push(
    new BookingEvent({ bookingId, oldStatus, newStatus, actor, reason })
  );
}

function retryAssignment(bookingId) {
  retryCount[bookingId] = (retryCount[bookingId] || 0) + 1;

  const booking = bookings.find(b => b.id === bookingId);
  if (!booking) return;

  if (retryCount[bookingId] > MAX_RETRIES) {
    const oldStatus = booking.status;
    booking.status = "failed";
    logEvent(booking.id, oldStatus, "failed", "system", "Retry limit exceeded");
    return;
  }

  const provider = providers.find(p => p.available);
  if (!provider) return;

  provider.available = false;
  booking.providerId = provider.id;

  const oldStatus = booking.status;
  booking.status = "assigned";

  logEvent(booking.id, oldStatus, "assigned", "system", "Retry assignment success");
}

module.exports = { retryAssignment };
