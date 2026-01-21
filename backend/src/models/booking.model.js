const bookings = [];

class Booking {
  constructor({ customerId, serviceType }) {
    this.id = Date.now().toString();
    this.customerId = customerId;
    this.providerId = null;
    this.serviceType = serviceType;
    this.status = "pending";
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = { Booking, bookings };
