const { bookings } = require("../models/booking.model");
const { providers } = require("../models/provider.model");
const { BookingEvent, bookingEvents } = require("../models/bookingEvent.model");

function logEvent(bookingId, oldStatus, newStatus, actor, reason) {
  bookingEvents.push(
    new BookingEvent({ bookingId, oldStatus, newStatus, actor, reason })
  );
}

exports.cancelBooking = (req, res) => {
  const booking = bookings.find(b => b.id === req.params.id);
  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  // ✅ allow cancel for pending OR assigned
  if (booking.status !== "pending" && booking.status !== "assigned") {
    return res.status(400).json({ message: "Cannot cancel booking" });
  }

  const oldStatus = booking.status;
  booking.status = "cancelled";

  // free provider if assigned
  if (booking.providerId) {
    const provider = providers.find(p => p.id === booking.providerId);
    if (provider) provider.available = true;
  }

  logEvent(
    booking.id,
    oldStatus,
    "cancelled",
    "customer",
    "Customer cancelled booking"
  );

  res.json(booking);
};
