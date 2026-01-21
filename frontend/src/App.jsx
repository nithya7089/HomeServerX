import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBooking from "./pages/CreateBooking";
import BookingDetails from "./pages/BookingDetails";
import BookingEvents from "./pages/BookingEvents";
import ProviderDashboard from "./pages/ProviderDashboard";
import AdminPanel from "./pages/AdminPanel";
import AccessBooking from "./pages/AccessBooking";
import CustomerCancel from "./pages/CustomerCancel";
import DeleteBooking from "./pages/DeleteBooking";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateBooking />} />
        <Route path="/access" element={<AccessBooking />} />
        <Route path="/cancel" element={<CustomerCancel />} />
        <Route path="/delete" element={<DeleteBooking />} />
        <Route path="/booking/:id" element={<BookingDetails />} />
        <Route path="/booking/:id/events" element={<BookingEvents />} />
        <Route path="/provider/:id" element={<ProviderDashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}
