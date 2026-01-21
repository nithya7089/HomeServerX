const { bookings } = require("../models/booking.model");
const { bookingEvents } = require("../models/bookingEvent.model");

exports.getAllBookings = (req, res) => {
  res.json(bookings);
};

exports.overrideBookingStatus = (req, res) => {
  const booking = bookings.find(b => b.id === req.params.id);
  if (!booking) return res.status(404).json({ message: "Booking not found" });

  booking.status = req.body.status;
  res.json(booking);
};

exports.getBookingEvents = (req, res) => {
  const data = bookingEvents.filter(e => e.bookingId === req.params.id);
  res.json(data);
};

// ✅ NEW: delete booking
exports.deleteBooking = (req, res) => {
  const index = bookings.findIndex(b => b.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Booking not found" });
  }

  bookings.splice(index, 1);
  res.json({ message: "Booking deleted" });
};
