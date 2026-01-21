const BASE = "http://localhost:5001/api";

export async function getProviderBookings(providerId) {
  const res = await fetch(`${BASE}/providers/${providerId}/bookings`);
  return res.json();
}

export async function acceptBooking(id) {
  const res = await fetch(`${BASE}/providers/booking/${id}/accept`, {
    method: "POST"
  });
  return res.json();
}

export async function completeBooking(id) {
  const res = await fetch(`${BASE}/providers/booking/${id}/complete`, {
    method: "POST"
  });
  return res.json();
}

export async function rejectBooking(id) {
  const res = await fetch(`${BASE}/providers/booking/${id}/reject`, {
    method: "POST"
  });
  return res.json();
}
