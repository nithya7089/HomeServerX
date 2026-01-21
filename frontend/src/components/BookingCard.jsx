import StatusBadge from "./StatusBadge";

export default function BookingCard({ booking, actions }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 6,
        padding: 12,
        marginBottom: 12
      }}
    >
      <p><b>ID:</b> {booking.id}</p>
      <p><b>Service:</b> {booking.serviceType}</p>
      <p>
        <b>Status:</b>{" "}
        <StatusBadge status={booking.status} />
      </p>
      <p><b>Provider:</b> {booking.providerId || "Unassigned"}</p>

      {actions && (
        <div style={{ marginTop: 10 }}>
          {actions.map((action, i) => (
            <button
              key={i}
              onClick={action.onClick}
              style={{ marginRight: 8 }}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
