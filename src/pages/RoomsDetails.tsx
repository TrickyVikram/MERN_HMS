import React, { useState, useEffect } from "react";

interface RoomDetailsProps {
  roomId: string; // Unique identifier for the room (e.g., room type, room number, etc.)
}

const RoomsDetails: React.FC<RoomDetailsProps> = ({ roomId }) => {
  const [roomDetails, setRoomDetails] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const fetchRoomDetails = async () => {
      // Simulating an API call to fetch room details based on roomId
      const response = {
        id: roomId,
        roomType: "AC Room",
        price: 2000,
        amenities: ["WiFi", "AC", "TV", "Free Breakfast", "Swimming Pool"],
        availability: "Available",
        description: "A spacious and comfortable room with modern amenities.",
      };
      
      setRoomDetails(response);
      setLoading(false);
    };

    fetchRoomDetails();
  }, [roomId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{roomDetails.roomType} Details</h2>
      
      <div className="mb-4">
        <p><strong>Description:</strong> {roomDetails.description}</p>
      </div>

      <div className="mb-4">
        <p><strong>Price:</strong> ₹{roomDetails.price}</p>
      </div>

      <div className="mb-4">
        <p><strong>Amenities:</strong></p>
        <ul className="list-disc pl-5">
          {roomDetails.amenities.map((amenity: string, index: number) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <p><strong>Availability:</strong> {roomDetails.availability}</p>
      </div>

      <div className="flex justify-end space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Book Room
        </button>
        <button className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500">
          Back to Rooms
        </button>
      </div>
    </div>
  );
};

export default RoomsDetails;
