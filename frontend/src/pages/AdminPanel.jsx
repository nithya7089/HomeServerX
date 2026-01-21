import { useEffect, useState } from "react";
import { getAllBookings, overrideBooking } from "../api/admin.api";

export default function AdminPanel() {
  const [bookings, setBookings] = useState([]);
  const [status, setStatus] = useState("");

  const load = async () => {
    const data = await getAllBookings();
    setBookings(data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="page">
      <h2>Admin Panel</h2>

      {bookings.map(b => (
        <div key={b.id} className="card">
          <p>
            <b>{b.id}</b> –{" "}
            <span className={`status ${b.status}`}>{b.status}</span>
          </p>

          <input
            className="input"
            placeholder="new status"
            onChange={e => setStatus(e.target.value)}
          />

          <button
            className="btn"
            onClick={() => overrideBooking(b.id, status).then(load)}
          >
            Override
          </button>
        </div>
      ))}
    </div>
  );
}
