import React, { useState, useEffect } from "react";

const BookingDashboard = () => {
  interface Booking {
    id: number;
    hostelId: string;
    studentName: string;
    studentContact: string;
    roomType: string;
    paymentStatus: string;
    checkInDate: string;
    checkOutDate: string;
  }
  
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    // Simulated API call to fetch booking details
    const fetchBookings = async () => {
      const response = [
        {
          id: 1,
          hostelId: "H001",
          studentName: "John Doe",
          studentContact: "1234567890",
          roomType: "AC Room",
          paymentStatus: "Paid",
          checkInDate: "2024-11-01",
          checkOutDate: "2024-12-01",
        },
        {
          id: 2,
          hostelId: "H002",
          studentName: "Jane Smith",
          studentContact: "9876543210",
          roomType: "Non-AC Room",
          paymentStatus: "Pending",
          checkInDate: "2024-10-15",
          checkOutDate: "2024-11-15",
        },
      ];
      setBookings(response);
    };

    fetchBookings();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Booking Dashboard</h2>

      <button    
        
        className="bg-blue-500 text-white px-4 py-2 dark:text-white rounded-lg hover:bg-blue-600">
          
          <a href="/dashboard/new-booking"> New Booking</a>
          
          
         </button>
         <br /><br />

      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-3 text-left">Sn</th>
            <th className="border border-gray-300 p-3 text-left">Hostel ID</th>
            <th className="border border-gray-300 p-3 text-left">Student Name</th>
            <th className="border border-gray-300 p-3 text-left">Contact</th>
            <th className="border border-gray-300 p-3 text-left">Room Type</th>
            <th className="border border-gray-300 p-3 text-left">Payment Status</th>
            <th className="border border-gray-300 p-3 text-left">Check-In</th>
            <th className="border border-gray-300 p-3 text-left">Check-Out</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-3">{index + 1}</td>
              <td className="border border-gray-300 p-3">{booking.hostelId}</td>
              <td className="border border-gray-300 p-3">{booking.studentName}</td>
              <td className="border border-gray-300 p-3">{booking.studentContact}</td>
              <td className="border border-gray-300 p-3">{booking.roomType}</td>
              <td
                className={`border border-gray-300 p-3 font-semibold ${
                  booking.paymentStatus === "Paid"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {booking.paymentStatus}
              </td>
              <td className="border border-gray-300 p-3">{booking.checkInDate}</td>
              <td className="border border-gray-300 p-3">{booking.checkOutDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingDashboard;
