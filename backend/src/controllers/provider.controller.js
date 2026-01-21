const { bookings } = require("../models/booking.model");
const { providers } = require("../models/provider.model");
const { BookingEvent, bookingEvents } = require("../models/bookingEvent.model");

function logEvent(bookingId, oldStatus, newStatus, actor, reason) {
  bookingEvents.push(
    new BookingEvent({ bookingId, oldStatus, newStatus, actor, reason })
  );
}

exports.viewAssignedBookings = (req, res) => {
  const { providerId } = req.params;

  const data = bookings.filter(
    b => b.providerId === providerId && b.status !== "completed"
  );

  res.json(data);
};

exports.acceptBooking = (req, res) => {
  const booking = bookings.find(b => b.id === req.params.id);
  if (!booking) return res.status(404).json({ message: "Booking not found" });

  if (booking.status === "pending") {
    logEvent(booking.id, "pending", "assigned", "provider", "Accepted");
    booking.status = "assigned";
  }

  if (booking.status === "assigned") {
    logEvent(booking.id, "assigned", "in_progress", "provider", "Started work");
    booking.status = "in_progress";
  }

  res.json(booking);
};

exports.completeBooking = (req, res) => {
  const booking = bookings.find(b => b.id === req.params.id);
  if (!booking) return res.status(404).json({ message: "Booking not found" });

  if (booking.status !== "in_progress") {
    return res.status(400).json({ message: "Cannot complete booking" });
  }

  booking.status = "completed";
  logEvent(
    booking.id,
    "in_progress",
    "completed",
    "provider",
    "Job completed"
  );

  const provider = providers.find(p => p.id === booking.providerId);
  if (provider) provider.available = true;

  res.json(booking);
};

exports.rejectBooking = (req, res) => {
  const booking = bookings.find(b => b.id === req.params.id);
  if (!booking) return res.status(404).json({ message: "Booking not found" });

  const provider = providers.find(p => p.id === booking.providerId);
  if (provider) provider.available = true;

  logEvent(booking.id, booking.status, "failed", "provider", "Rejected");
  booking.status = "failed";

  res.json(booking);
};
