const express = require("express");
const router = express.Router();
const controller = require("../controllers/provider.controller");

router.get("/:providerId/bookings", controller.viewAssignedBookings);
router.post("/booking/:id/accept", controller.acceptBooking);
router.post("/booking/:id/complete", controller.completeBooking);
router.post("/booking/:id/reject", controller.rejectBooking);

module.exports = router;
