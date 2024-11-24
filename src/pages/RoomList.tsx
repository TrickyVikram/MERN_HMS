import React, { useState, useEffect } from "react";

interface Student {
  name: string;
  contact: string;
}

interface Room {
  roomNo: number;
  roomType: string;
  badType: string;
  price: number;
  amenities: string[];
  occupancy: number; // Current occupancy
  maxOccupancy: number; // Max capacity
  students?: Student[]; // List of students occupying the room
}

const commonAmenities = ["Dinner", "Lunch", "Breakfast"];

const RoomsList: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [available, setAvailable] = useState<Room[]>([]);
  const [booked, setBooked] = useState<Room[]>([]);

  useEffect(() => {
    // Simulate fetching rooms from an API
    const fetchedRooms: Room[] = [
      {
        roomNo: 101,
        roomType: "AC",
        badType: "Single",
        price: 4000,
        amenities: [...commonAmenities, "Mini Fridge"],
        occupancy: 0,
        maxOccupancy: 1,
        students: [],
      },
      {
        roomNo: 102,
        roomType: "Non-AC",
        badType: "Double",
        price: 2500,
        amenities: [...commonAmenities],
        occupancy: 1,
        maxOccupancy: 2,
        students: [{ name: "Alice Johnson", contact: "9876543210" }],
      },
      {
        roomNo: 103,
        roomType: "AC",
        badType: "Suite",
        price: 8000,
        amenities: [...commonAmenities, "Private Balcony", "Jacuzzi"],
        occupancy: 2,
        maxOccupancy: 2,
        students: [
          { name: "John Smith", contact: "1234567890" },
          { name: "Emma Brown", contact: "9876543211" },
        ],
      },
    ];

    setTimeout(() => {
      setRooms(fetchedRooms);
      setLoading(false);
    }, 1000); // Simulate a delay
  }, []);

  useEffect(() => {
    setAvailable(rooms.filter((room) => room.occupancy < room.maxOccupancy));
    setBooked(rooms.filter((room) => room.occupancy === room.maxOccupancy));
  }, [rooms]);

  const handleBookNow = (roomNo: number) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.roomNo === roomNo && room.occupancy < room.maxOccupancy
          ? { ...room, occupancy: room.occupancy + 1 }
          : room
      )
    );
  };

  const StatusBadge: React.FC<{ status: "Available" | "Full" | "Partial" }> = ({
    status,
  }) => {
    const colors: Record<string, string> = {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Total Rooms</h2>
          <p className="text-2xl font-bold text-gray-600">{rooms.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Available Rooms</h2>
          <p className="text-2xl font-bold text-green-600">{available.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Booked Rooms</h2>
          <p className="text-2xl font-bold text-red-600">{booked.length}</p>
        </div>
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
            {available.map((room, index) => (
              <tr
                key={room.roomNo}
                className="hover:bg-gray-100 text-gray-700 text-sm font-medium"
              >
                <td className="px-6 py-4 border-b border-gray-300">{index + 1}</td>
                <td className="px-6 py-4 border-b border-gray-300">{room.roomNo}</td>
                <td className="px-6 py-4 border-b border-gray-300">{room.roomType}</td>
                <td className="px-6 py-4 border-b border-gray-300">{room.badType}</td>
                <td className="px-6 py-4 border-b border-gray-300">₹{room.price}</td>
                <td className="px-6 py-4 border-b border-gray-300">
                  <ul className="list-disc pl-5">
                    {room.amenities.map((amenity, i) => (
                      <li key={i}>{amenity}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4 border-b border-gray-300 text-center">
                  <StatusBadge
                    status={room.occupancy === 0 ? "Available" : "Partial"}
                  />
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
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Booked Rooms</h3>
        <div className="overflow-x-auto">
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
              {booked.map((room, index) => (
                <tr
                  key={room.roomNo}
                  className="hover:bg-gray-100 text-gray-700 text-sm font-medium"
                >
                  <td className="px-6 py-4 border-b border-gray-300">{index + 1}</td>
                  <td className="px-6 py-4 border-b border-gray-300">{room.roomNo}</td>
                  <td className="px-6 py-4 border-b border-gray-300">{room.roomType}</td>
                  <td className="px-6 py-4 border-b border-gray-300">{room.badType}</td>
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
    </div>
  );
};

export default RoomsList;
