const express = require("express");
const router = express.Router();
const controller = require("../controllers/admin.controller");

router.get("/bookings", controller.getAllBookings);
router.post("/booking/:id/override", controller.overrideBookingStatus);
router.get("/booking/:id/events", controller.getBookingEvents);
router.delete("/booking/:id", controller.deleteBooking); // ✅ ADD THIS

module.exports = router;
