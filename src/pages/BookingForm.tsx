import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Booking {
  hostelId: string;
  studentName: string;
  studentContact: string;
  status: string; // e.g., "Booked", "Completed", etc.
}

const BookingDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([
    { hostelId: "101", studentName: "John Doe", studentContact: "1234567890", status: "Booked" },
    { hostelId: "102", studentName: "Jane Smith", studentContact: "0987654321", status: "Completed" },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Booking Dashboard</h1>

      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Hostel ID</th>
            <th className="border p-2">Student Name</th>
            <th className="border p-2">Student Contact</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td className="border p-2">{booking.hostelId}</td>
              <td className="border p-2">{booking.studentName}</td>
              <td className="border p-2">{booking.studentContact}</td>
              <td className="border p-2">{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/new-booking">
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          New Booking
        </button>
      </Link>
    </div>
  );
};

export default BookingDashboard;
