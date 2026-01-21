import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BookingEvents() {
  const { id } = useParams();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/api/admin/booking/${id}/events`)
      .then(res => res.json())
      .then(setEvents);
  }, [id]);

  return (
    <div className="page">
      <h2>Booking Events</h2>

      {events.map(e => (
        <div key={e.id} className="card">
          <p>
            <b>{e.old_status || "NONE"}</b> →{" "}
            <b className={`status ${e.new_status}`}>
              {e.new_status}
            </b>
          </p>

          <p><b>Actor:</b> {e.actor}</p>
          <p><b>Reason:</b> {e.reason}</p>

          <small>{new Date(e.timestamp).toLocaleString()}</small>
        </div>
      ))}

      {events.length === 0 && <p>No events found</p>}
    </div>
  );
}
