const { bookings } = require("../models/booking.model");
const { providers } = require("../models/provider.model");
const { BookingEvent, bookingEvents } = require("../models/bookingEvent.model");

exports.getAllBookings = (req, res) => {
  res.json(bookings);
};

exports.getBooking = (req, res) => {
  const booking = bookings.find(b => b.id === req.params.id);
  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }
  res.json(booking);
};

exports.createBooking = (req, res) => {
  const { customerId, serviceType } = req.body;

  if (!customerId || !serviceType) {
    return res.status(400).json({ message: "Invalid request body" });
  }

  const provider = providers.find(p => p.available);

  const booking = {
    id: Date.now().toString(),
    customerId,
    providerId: provider ? provider.id : null,
    serviceType,
    status: provider ? "assigned" : "pending",
    createdAt: new Date(),
    updatedAt: new Date()
  };

  bookings.push(booking);

  bookingEvents.push(
    new BookingEvent({
      bookingId: booking.id,
      oldStatus: "NONE",
      newStatus: booking.status,
      actor: "system",
      reason: provider ? "Auto assigned provider" : "No provider available"
    })
  );

  if (provider) provider.available = false;

  res.json(booking);
};
