import React, { useState, useEffect } from 'react';

interface Room {
  RoomNo: number;
  roomType: string;
  BadType: string;
  price: number;
  amenities: string[];
}

const RoomList: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    // Simulate fetching rooms from an API
    const fetchedRooms: Room[] = [
      {
        RoomNo: 12,
        roomType: "AC Room",
        BadType: "Double",
        price: 2500,
        amenities: ["WiFi", "Breakfast", "Study Room", "Dinner", "Lunch"],
      },
      {
        RoomNo: 13,
        roomType: "Non-AC Room",
        BadType: "Double",
        price: 1500,
        amenities: ["WiFi", "Breakfast", "Lunch"],
      },
      {
        RoomNo: 14,
        roomType: "AC Room",
        BadType: "Single",
        price: 3500,
        amenities: ["WiFi", "Dinner", "Lunch", "Swimming Pool", "Sports"],
      },
    ];

    setRooms(fetchedRooms);
  }, []);

  const handleBookNow = (roomNo: number) => {
    alert(`Booking room ${roomNo}...`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-700 mb-6">Rooms Details</h2>

      {/* Total Rooms Card */}
      <div className="mb-6 p-4 bg-blue-100 text-blue-800 rounded-md shadow-md">
        <p className="text-lg font-semibold">Total Rooms: {rooms.length}</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="px-6 py-3 text-left border-b border-gray-300">SN</th>
              <th className="px-6 py-3 text-left border-b border-gray-300">Room No</th>
              <th className="px-6 py-3 text-left border-b border-gray-300">Room Type</th>
              <th className="px-6 py-3 text-left border-b border-gray-300">Bed Type</th>
              <th className="px-6 py-3 text-left border-b border-gray-300">(₹)Price/month</th>
              <th className="px-6 py-3 text-left border-b border-gray-300">Facilities</th>
              <th className="px-6 py-3 text-center border-b border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr
                key={room.RoomNo}
                className="hover:bg-gray-100 text-gray-700 text-sm font-medium"
              >
                <td className="px-6 py-4 border-b border-gray-300">{index + 1}</td>
                <td className="px-6 py-4 border-b border-gray-300">{room.RoomNo}</td>
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
                  <button
                    onClick={() => handleBookNow(room.RoomNo)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                  >
                    Book Now
                  </button>
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
