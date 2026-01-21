const bookingService = require("../services/booking.service");
const { providers } = require("../models/provider.model");

exports.completeBooking = (req, res, next) => {
  try {
    const booking = bookingService.updateStatus(
      req.params.id,
      "completed",
      "provider",
      "Service completed"
    );

    const provider = providers.find(p => p.id === booking.providerId);
    if (provider) provider.available = true;

    res.json(booking);
  } catch (err) {
    next(err);
  }
};
