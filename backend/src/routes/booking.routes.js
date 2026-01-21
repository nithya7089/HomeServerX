const express = require("express");
const router = express.Router();
const controller = require("../controllers/booking.controller");

router.get("/bookings", controller.getAllBookings);
router.post("/bookings", controller.createBooking);
router.get("/bookings/:id", controller.getBooking);

module.exports = router;
