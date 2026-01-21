export default function StatusBadge({ status }) {
  const color = {
    pending: "gray",
    assigned: "blue",
    in_progress: "orange",
    completed: "green",
    cancelled: "red",
    failed: "black"
  }[status];

  return (
    <span style={{ padding: "4px 8px", background: color, color: "#fff" }}>
      {status}
    </span>
  );
}
