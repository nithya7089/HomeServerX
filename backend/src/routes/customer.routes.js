const express = require("express");
const router = express.Router();
const controller = require("../controllers/customer.controller");

router.post("/booking/:id/cancel", controller.cancelBooking);

module.exports = router;
