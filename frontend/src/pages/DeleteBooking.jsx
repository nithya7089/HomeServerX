import { useState } from "react";

export default function DeleteBooking() {
  const [id, setId] = useState("");

  const remove = async () => {
    if (!id) {
      alert("Enter booking ID");
      return;
    }

    await fetch(`http://localhost:5001/api/admin/booking/${id}`, {
      method: "DELETE"
    });

    alert("Booking deleted");
    setId("");
  };

  return (
    <div className="page">
      <h2>Delete Booking</h2>

      <input
        className="input"
        placeholder="Booking ID"
        value={id}
        onChange={e => setId(e.target.value)}
      />

      <button className="btn" onClick={remove}>
        Delete
      </button>
    </div>
  );
}
