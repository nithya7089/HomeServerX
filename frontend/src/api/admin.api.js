const BASE = "http://localhost:5001/api";

export async function getAllBookings() {
  const res = await fetch(`${BASE}/admin/bookings`);
  return res.json();
}

export async function overrideBooking(id, status) {
  await fetch(`${BASE}/admin/booking/${id}/override`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  });
}
