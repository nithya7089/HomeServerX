import { useEffect, useState } from "react";
import {
  getProviderBookings,
  acceptBooking,
  completeBooking,
  rejectBooking
} from "../api/provider.api";

export default function ProviderDashboard() {
  const providerId = "p1";
  const [bookings, setBookings] = useState([]);

  const load = async () => {
    const data = await getProviderBookings(providerId);
    setBookings(data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="page">
      <h2>Provider Dashboard</h2>

      {bookings.length === 0 && <p>No bookings</p>}

      {bookings.map(b => (
        <div key={b.id} className="card">
          <p>
            <b>ID:</b> {b.id}
          </p>
          <p>
            <b>Service:</b> {b.serviceType}
          </p>
          <p>
            <b>Status:</b>{" "}
            <span className={`status ${b.status}`}>
              {b.status}
            </span>
          </p>

          {b.status !== "completed" && (
            <>
              <button
                className="btn"
                onClick={async () => {
                  await acceptBooking(b.id);
                  load();
                }}
              >
                Accept
              </button>

              <button
                className="btn"
                onClick={async () => {
                  await completeBooking(b.id);
                  load();
                }}
              >
                Complete
              </button>

              <button
                className="btn"
                onClick={async () => {
                  await rejectBooking(b.id);
                  load();
                }}
              >
                Reject
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
