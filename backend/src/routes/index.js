const express = require("express");
const router = express.Router();

const bookingRoutes = require("./booking.routes");
const providerRoutes = require("./provider.routes");
const adminRoutes = require("./admin.routes");
const customerRoutes = require("./customer.routes");

router.use("/bookings", bookingRoutes);
router.use("/providers", providerRoutes);
router.use("/admin", adminRoutes);
router.use("/customers", customerRoutes);

module.exports = router;
