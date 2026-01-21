import { useState } from "react";
import { createBooking } from "../api/booking.api";

export default function CreateBooking() {
  const [serviceType, setServiceType] = useState("");
  const [bookingId, setBookingId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    if (!serviceType) {
      setError("Enter service type");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await createBooking({
        customerId: "c1",
        serviceType
      });

      setBookingId(res.id);
      setServiceType("");
    } catch {
      setError("Failed to create booking");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h2>Create Booking</h2>

      <input
        className="input"
        placeholder="Input"
        value={serviceType}
        onChange={e => setServiceType(e.target.value)}
      />

      <br />

      <button className="btn" onClick={submit} disabled={loading}>
        {loading ? "Creating booking..." : "Book"}
      </button>

      {error && <p className="error">{error}</p>}

      {bookingId && (
        <>
          <p className="success">✅ Booking created</p>
          <p>
            <b>Booking ID:</b> {bookingId}
          </p>
          <a href={`/booking/${bookingId}`}>View Booking →</a>
        </>
      )}
    </div>
  );
}
