const { providers } = require("../models/provider.model");
const { bookings } = require("../models/booking.model");
const { BookingEvent, bookingEvents } = require("../models/bookingEvent.model");

function logEvent(bookingId, oldStatus, newStatus, actor, reason) {
  bookingEvents.push(
    new BookingEvent({ bookingId, oldStatus, newStatus, actor, reason })
  );
}

function assignProvider(bookingId) {
  const booking = bookings.find(b => b.id === bookingId);
  if (!booking) throw new Error("Booking not found");

  const provider = providers.find(p => p.available);
  if (!provider) throw new Error("No providers available");

  provider.available = false;
  booking.providerId = provider.id;

  const oldStatus = booking.status;
  booking.status = "assigned";

  logEvent(booking.id, oldStatus, "assigned", "system", "Provider assigned");
  return booking;
}

module.exports = { assignProvider };
