const BASE = "http://localhost:5001/api"; // use your backend port

export async function createBooking(data) {
  const res = await fetch(`${BASE}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
}

export async function getBooking(id) {
  const res = await fetch(`${BASE}/bookings/${id}`);
  return res.json();
}
