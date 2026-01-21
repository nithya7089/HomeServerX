import { useState } from "react";

export default function CustomerCancel() {
  const [id, setId] = useState("");

  const cancel = async () => {
    await fetch(`http://localhost:5001/api/customers/booking/${id}/cancel`, {
      method: "POST"
    });
    alert("Cancelled");
  };

  return (
    <div className="page">
      <h3>Cancel Booking</h3>

      <input
        className="input"
        placeholder="Booking ID"
        value={id}
        onChange={e => setId(e.target.value)}
      />

      <button className="btn" onClick={cancel}>
        Cancel
      </button>
    </div>
  );
}
