const express = require("express");
const cors = require("cors");

const bookingRoutes = require("./routes/booking.routes");
const providerRoutes = require("./routes/provider.routes");
const adminRoutes = require("./routes/admin.routes");
const customerRoutes = require("./routes/customer.routes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api", bookingRoutes);
app.use("/api/providers", providerRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/customers", customerRoutes);

// health check
app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;
