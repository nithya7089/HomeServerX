import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBooking } from "../api/booking.api";

export default function BookingDetails() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getBooking(id)
      .then(data => {
        if (data.message) {
          setError(data.message);
        } else {
          setBooking(data);
        }
      })
      .catch(() => setError("Server error"));
  }, [id]);

  if (error) return <p className="error">{error}</p>;
  if (!booking) return <p className="loading">Loading...</p>;

  return (
    <div className="page">
      <h2>Booking</h2>

      <div className="card">
        <p><b>ID:</b> {booking.id}</p>
        <p><b>Service:</b> {booking.serviceType}</p>
        <p>
          <b>Status:</b>{" "}
          <span className={`status ${booking.status}`}>
            {booking.status}
          </span>
        </p>
      </div>
    </div>
  );
}
