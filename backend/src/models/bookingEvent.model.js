const bookingEvents = [];

class BookingEvent {
  constructor({ bookingId, oldStatus, newStatus, actor, reason }) {
    this.id = Date.now().toString();
    this.bookingId = bookingId;
    this.oldStatus = oldStatus;
    this.newStatus = newStatus;
    this.actor = actor;
    this.reason = reason || null;
    this.timestamp = new Date();
  }
}

module.exports = { BookingEvent, bookingEvents };
