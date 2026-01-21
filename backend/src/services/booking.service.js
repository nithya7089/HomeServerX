const { Booking, bookings } = require("../models/booking.model");
const { providers } = require("../models/provider.model");
const { BookingEvent, bookingEvents } = require("../models/bookingEvent.model");

function logEvent(bookingId, oldStatus, newStatus, actor, reason) {
  bookingEvents.push(
    new BookingEvent({ bookingId, oldStatus, newStatus, actor, reason })
  );
}

function createBooking(data) {
  const booking = new Booking(data);

  // 👉 auto assign provider p1 for demo
  const provider = providers.find(p => p.available);
  if (provider) {
    provider.available = false;
    booking.providerId = provider.id;
    booking.status = "assigned";
    logEvent(booking.id, "pending", "assigned", "system", "Auto assigned");
  } else {
    logEvent(booking.id, null, "pending", "customer", "Booking created");
  }

  bookings.push(booking);
  return booking;
}

function getBookingById(id) {
  return bookings.find(b => b.id === id);
}

module.exports = {
  createBooking,
  getBookingById
};
