import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AccessBooking() {
  const [bookingId, setBookingId] = useState("");
  const navigate = useNavigate();

  const submit = () => {
    if (!bookingId) {
      alert("Enter booking ID");
      return;
    }

    navigate(`/booking/${bookingId}`);
  };

  return (
    <div className="page">
      <h2>Access Booking</h2>

      <input
        className="input"
        placeholder="Booking ID"
        value={bookingId}
        onChange={e => setBookingId(e.target.value)}
      />

      <br /><br />

      <button className="btn" onClick={submit}>
        Access
      </button>
    </div>
  );
}
