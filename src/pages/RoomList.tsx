import React, { useState, useEffect } from "react";

interface Student {
  name: string;
  contact: string;
}

interface Room {
  roomNo: number;
  roomType: string;
  BadType: string;
  price: number;
  amenities: string[];
  occupancy: number; // Current occupancy
  maxOccupancy: number; // Max capacity
  available?: boolean; // Optional availability flag
  students?: Student[]; // List of students occupying the room
}

const commonAmenities = ["Dinner", "Lunch", "Breakfast"];

const RoomList: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching rooms from an API
    const fetchedRooms: Room[] = [
        {
          roomNo: 101,
          roomType: "AC",
          BadType: "Single",
          price: 4000,
          amenities: [...commonAmenities, "Mini Fridge"],
          occupancy: 0,
          maxOccupancy: 1,
          students: [],
        },
        {
          roomNo: 102,
          roomType: "Non-AC",
          BadType: "Double",
          price: 2500,
          amenities: [...commonAmenities],
          occupancy: 1,
          maxOccupancy: 2,
          students: [{ name: "Alice Johnson", contact: "9876543210" }],
        },
        {
          roomNo: 103,
          roomType: "AC",
          BadType: "Suite",
          price: 8000,
          amenities: [...commonAmenities, "Private Balcony", "Jacuzzi"],
          occupancy: 2,
          maxOccupancy: 2,
          students: [
            { name: "John Smith", contact: "1234567890" },
            { name: "Emma Brown", contact: "9876543211" },
          ],
        },
        {
          roomNo: 104,
          roomType: "Non-AC",
          BadType: "Single",
          price: 2000,
          amenities: [...commonAmenities],
          occupancy: 0,
          maxOccupancy: 1,
          students: [],
        },
        {
          roomNo: 105,
          roomType: "AC",
          BadType: "Double",
          price: 4500,
          amenities: [...commonAmenities, "Ocean View"],
          occupancy: 2,
          maxOccupancy: 2,
          students: [
            { name: "Sophia Davis", contact: "5678901234" },
            { name: "William Taylor", contact: "2345678901" },
          ],
        },
        {
          roomNo: 106,
          roomType: "Non-AC",
          BadType: "Single",
          price: 1800,
          amenities: [...commonAmenities],
          occupancy: 1,
          maxOccupancy: 1,
          students: [{ name: "Michael White", contact: "8765432109" }],
        },
        {
          roomNo: 107,
          roomType: "AC",
          BadType: "Suite",
          price: 7500,
          amenities: [...commonAmenities, "Hot Tub", "Living Area"],
          occupancy: 0,
          maxOccupancy: 3,
          students: [],
        },
        {
          roomNo: 108,
          roomType: "Non-AC",
          BadType: "Double",
          price: 2300,
          amenities: [...commonAmenities],
          occupancy: 0,
          maxOccupancy: 2,
          students: [{ name: "Olivia Wilson", contact: "6789012345" }],
        },
        {
          roomNo: 109,
          roomType: "AC",
          BadType: "Single",
          price: 4200,
          amenities: [...commonAmenities, "Smart TV"],
          occupancy: 0,
          maxOccupancy: 1,
          students: [],
        },
        {
          roomNo: 110,
          roomType: "Non-AC",
          BadType: "Double",
          price: 3000,
          amenities: [...commonAmenities, "Garden View"],
          occupancy: 2,
          maxOccupancy: 2,
          students: [
            { name: "Liam Anderson", contact: "3456789012" },
            { name: "Ella Martinez", contact: "4567890123" },
          ],
        },
      ];
    setTimeout(() => {
      setRooms(fetchedRooms);
      setLoading(false);
    }, 1000); // Simulate a delay
  }, []);

  const handleBookNow = (roomNo: number) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.roomNo === roomNo && room.occupancy < room.maxOccupancy
          ? { ...room, occupancy: room.occupancy + 1 }
          : room
      )
    );
  };

  // Separate rooms into available and booked based on occupancy
  const availableRooms = rooms.filter((room) => room.occupancy < room.maxOccupancy);
  const bookedRooms = rooms.filter((room) => room.occupancy >= room.maxOccupancy);

  // Reusable Status Badge Component
  const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
    const colors = {
      Available: "text-green-500",
      Full: "text-red-500",
      Partial: "text-yellow-500",
    };
    return <span className={`font-bold ${colors[status]}`}>{status}</span>;
  };

  if (loading) {
    return <div className="text-center text-gray-500 mt-8">Loading rooms...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-700 mb-6">Room List</h2>

      {/* Total Rooms Card */}
      <div className="mb-6 p-4 bg-blue-100 text-blue-800 rounded-md shadow-md">
        <p className="text-lg font-semibold">Total Rooms: {rooms.length}</p>
      </div>

      {/* Available Rooms Table */}
      <div className="overflow-x-auto mb-8">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Available Rooms</h3>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="px-6 py-3 text-left border-b border-gray-300">SN</th>
              <th className="px-6 py-3 text-left border-b border-gray-300">Room No</th>
              <th className="px-6 py-3 text-left border-b border-gray-300">Room Type</th>
              <th className="px-6 py-3 text-left border-b border-gray-300">Bed Type</th>
              <th className="px-6 py-3 text-left border-b border-gray-300">Price (₹)</th>
              <th className="px-6 py-3 text-left border-b border-gray-300">Amenities</th>
              <th className="px-6 py-3 text-center border-b border-gray-300">Status</th>
              <th className="px-6 py-3 text-center border-b border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {availableRooms.map((room, index) => (
              <tr key={room.roomNo} className="hover:bg-gray-100 text-gray-700 text-sm font-medium">
                <td className="px-6 py-4 border-b border-gray-300">{index + 1}</td>
                <td className="px-6 py-4 border-b border-gray-300">{room.roomNo}</td>
                <td className="px-6 py-4 border-b border-gray-300">{room.roomType}</td>
                <td className="px-6 py-4 border-b border-gray-300">{room.BadType}</td>
                <td className="px-6 py-4 border-b border-gray-300">₹{room.price}</td>
                <td className="px-6 py-4 border-b border-gray-300">
                  <ul className="list-disc pl-5">
                    {room.amenities.map((amenity, i) => (
                      <li key={i}>{amenity}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4 border-b border-gray-300 text-center">
                  <StatusBadge status={room.occupancy === 0 ? "Available" : "Partial"} />
                </td>
                <td className="px-6 py-4 border-b border-gray-300 text-center">
                  <button
                    onClick={() => handleBookNow(room.roomNo)}
                    className={`px-4 py-2 rounded-md transition ${
                      room.occupancy >= room.maxOccupancy
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                    disabled={room.occupancy >= room.maxOccupancy}
                  >
                    Book Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Booked Rooms Table */}
      <div className="overflow-x-auto">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Booked Rooms</h3>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="px-6 py-3 text-left border-b border-gray-300">SN</th>
              <th className="px-6 py-3 text-left border-b border-gray-300">Room No</th>
              <th className="px-6 py-3 text-left border-b border-gray-300">Room Type</th>
              <th className="px-6 py-3 text-left border-b border-gray-300">Bed Type</th>
              <th className="px-6 py-3 text-left border-b border-gray-300">Price (₹)</th>
              <th className="px-6 py-3 text-left border-b border-gray-300">Amenities</th>
              <th className="px-6 py-3 text-center border-b border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookedRooms.map((room, index) => (
              <tr key={room.roomNo} className="hover:bg-gray-100 text-gray-700 text-sm font-medium">
                <td className="px-6 py-4 border-b border-gray-300">{index + 1}</td>
                <td className="px-6 py-4 border-b border-gray-300">{room.roomNo}</td>
                <td className="px-6 py-4 border-b border-gray-300">{room.roomType}</td>
                <td className="px-6 py-4 border-b border-gray-300">{room.BadType}</td>
                <td className="px-6 py-4 border-b border-gray-300">₹{room.price}</td>
                <td className="px-6 py-4 border-b border-gray-300">
                  <ul className="list-disc pl-5">
                    {room.amenities.map((amenity, i) => (
                      <li key={i}>{amenity}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4 border-b border-gray-300 text-center">
                  <StatusBadge status="Full" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomList;
