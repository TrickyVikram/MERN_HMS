import React, { useState } from 'react';

const Dashboard = () => {
  // Dummy data for rooms and students
  const rooms = [
    {
      "roomNo": 101,
      "roomType": "AC",
      "badType": "Single",
      "price": 4000,
      "amenities": ["Dinner", "Lunch", "Breakfast", "Mini Fridge"],
      "occupancy": 0,
      "maxOccupancy": 1,
      "students": []
    },
    {
      "roomNo": 102,
      "roomType": "Non-AC",
      "badType": "Double",
      "price": 2500,
      "amenities": ["Dinner", "Lunch", "Breakfast"],
      "occupancy": 1,
      "maxOccupancy": 2,
      "students": [
        {
          "name": "Alice Kumar",
          "contact": "9876543210",
          "imgUrl": "https://randomuser.me/api/portraits/women/1.jpg"
        }
      ]
    },
    {
      "roomNo": 103,
      "roomType": "AC",
      "badType": "Suite",
      "price": 8000,
      "amenities": ["Dinner", "Lunch", "Breakfast", "Private Balcony", "Jacuzzi"],
      "occupancy": 2,
      "maxOccupancy": 2,
      "students": [
        {
          "name": "John Singh",
          "contact": "1234567890",
          "imgUrl": "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
          "name": "Emma Sharma",
          "contact": "9876543211",
          "imgUrl": "https://randomuser.me/api/portraits/women/2.jpg"
        }
      ]
    },
    {
      "roomNo": 104,
      "roomType": "Non-AC",
      "badType": "Double",
      "price": 3000,
      "amenities": ["Dinner", "Lunch", "Breakfast"],
      "occupancy": 1,
      "maxOccupancy": 2,
      "students": [
        {
          "name": "Ravi Verma",
          "contact": "9998765432",
          "imgUrl": "https://randomuser.me/api/portraits/men/2.jpg"
        }
      ]
    },
    {
      "roomNo": 105,
      "roomType": "AC",
      "badType": "Single",
      "price": 5000,
      "amenities": ["Dinner", "Lunch", "Breakfast", "Mini Fridge"],
      "occupancy": 0,
      "maxOccupancy": 1,
      "students": []
    },
    {
      "roomNo": 106,
      "roomType": "AC",
      "badType": "Double",
      "price": 3500,
      "amenities": ["Dinner", "Lunch", "Breakfast"],
      "occupancy": 2,
      "maxOccupancy": 2,
      "students": [
        {
          "name": "Priya Iyer",
          "contact": "7891234567",
          "imgUrl": "https://randomuser.me/api/portraits/women/3.jpg"
        },
        {
          "name": "Vikram Patel",
          "contact": "9876541230",
          "imgUrl": "https://randomuser.me/api/portraits/men/3.jpg"
        }
      ]
    },
    {
      "roomNo": 107,
      "roomType": "Non-AC",
      "badType": "Suite",
      "price": 6000,
      "amenities": ["Dinner", "Lunch", "Breakfast", "Private Balcony"],
      "occupancy": 1,
      "maxOccupancy": 2,
      "students": [
        {
          "name": "Karan Joshi",
          "contact": "8897766554",
          "imgUrl": "https://randomuser.me/api/portraits/men/4.jpg"
        }
      ]
    },
    {
      "roomNo": 108,
      "roomType": "AC",
      "badType": "Single",
      "price": 4500,
      "amenities": ["Dinner", "Lunch", "Breakfast", "Mini Fridge"],
      "occupancy": 0,
      "maxOccupancy": 1,
      "students": []
    },
    {
      "roomNo": 109,
      "roomType": "Non-AC",
      "badType": "Double",
      "price": 2800,
      "amenities": ["Dinner", "Lunch", "Breakfast"],
      "occupancy": 1,
      "maxOccupancy": 2,
      "students": [
        {
          "name": "Ananya Reddy",
          "contact": "8798765432",
          "imgUrl": "https://randomuser.me/api/portraits/women/4.jpg"
        }
      ]
    },
    {
      "roomNo": 110,
      "roomType": "AC",
      "badType": "Suite",
      "price": 7000,
      "amenities": ["Dinner", "Lunch", "Breakfast", "Private Balcony", "Jacuzzi"],
      "occupancy": 2,
      "maxOccupancy": 2,
      "students": [
        {
          "name": "Arun Soni",
          "contact": "9988776655",
          "imgUrl": "https://randomuser.me/api/portraits/men/5.jpg"
        },
        {
          "name": "Neha Thakur",
          "contact": "9876655443",
          "imgUrl": "https://randomuser.me/api/portraits/women/5.jpg"
        }
      ]
    },
    {
      "roomNo": 111,
      "roomType": "Non-AC",
      "badType": "Single",
      "price": 3500,
      "amenities": ["Dinner", "Lunch", "Breakfast"],
      "occupancy": 0,
      "maxOccupancy": 1,
      "students": []
    },
    {
      "roomNo": 112,
      "roomType": "AC",
      "badType": "Double",
      "price": 4200,
      "amenities": ["Dinner", "Lunch", "Breakfast", "Mini Fridge"],
      "occupancy": 1,
      "maxOccupancy": 2,
      "students": [
        {
          "name": "Sandeep Mehra",
          "contact": "9088776655",
          "imgUrl": "https://randomuser.me/api/portraits/men/6.jpg"
        }
      ]
    },
    {
      "roomNo": 113,
      "roomType": "AC",
      "badType": "Single",
      "price": 5500,
      "amenities": ["Dinner", "Lunch", "Breakfast", "Mini Fridge"],
      "occupancy": 0,
      "maxOccupancy": 1,
      "students": []
    },
    {
      "roomNo": 114,
      "roomType": "Non-AC",
      "badType": "Double",
      "price": 2900,
      "amenities": ["Dinner", "Lunch", "Breakfast"],
      "occupancy": 1,
      "maxOccupancy": 2,
      "students": [
        {
          "name": "Sita Devi",
          "contact": "7890456123",
          "imgUrl": "https://randomuser.me/api/portraits/women/6.jpg"
        }
      ]
    },
    {
      "roomNo": 115,
      "roomType": "AC",
      "badType": "Suite",
      "price": 7600,
      "amenities": ["Dinner", "Lunch", "Breakfast", "Private Balcony", "Jacuzzi"],
      "occupancy": 2,
      "maxOccupancy": 2,
      "students": [
        {
          "name": "Ajay Rathi",
          "contact": "9888777777",
          "imgUrl": "https://randomuser.me/api/portraits/men/7.jpg"
        },
        {
          "name": "Priya Kumari",
          "contact": "9777554433",
          "imgUrl": "https://randomuser.me/api/portraits/women/7.jpg"
        }
      ]
    },
    {
      "roomNo": 116,
      "roomType": "Non-AC",
      "badType": "Double",
      "price": 3300,
      "amenities": ["Dinner", "Lunch", "Breakfast"],
      "occupancy": 0,
      "maxOccupancy": 2,
      "students": []
    },
    {
      "roomNo": 117,
      "roomType": "AC",
      "badType": "Single",
      "price": 4200,
      "amenities": ["Dinner", "Lunch", "Breakfast", "Mini Fridge"],
      "occupancy": 1,
      "maxOccupancy": 1,
      "students": [
        {
          "name": "Vikas Yadav",
          "contact": "9988776655",
          "imgUrl": "https://randomuser.me/api/portraits/men/8.jpg"
        }
      ]
    }
  ]
  

  const [searchTerm, setSearchTerm] = useState('');

  // Filter rooms based on search (only available rooms)
  const filteredRooms = rooms.filter(
    (room) =>
      (room.roomNo.toString().includes(searchTerm) ||
        room.roomType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        room.students.some(
          (student) =>
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.contact.includes(searchTerm)
        )) && room.occupancy < room.maxOccupancy // Check if the room is available
  );

  // Flatten all students with room info for the student list
  const allStudents = rooms.flatMap((room) =>
    room.students.map((student) => ({
      ...student,
      roomNo: room.roomNo,
      roomType: room.roomType,
    }))
  );

  // Filter students based on search
  const filteredStudents = allStudents.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.contact.includes(searchTerm) ||
      student.roomNo.toString().includes(searchTerm) ||
      student.roomType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalRooms = rooms.length;
  const bookedRooms = rooms.filter((room) => room.occupancy === room.maxOccupancy).length;
  const availableRooms = totalRooms - bookedRooms;

  return (
    <div className="p-6">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Hostel Management Dashboard</h1>
        <button className="bg-blue-500 text-white px-4 py-2 dark:text-white rounded-lg hover:bg-blue-600">
          <a href="/dashboard/new-booking">New Booking</a>
        </button>
      </div>

      {/* Search Section */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search (Room No, Type, Student Name, Contact)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full"
        />
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Total Rooms</h2>
          <p className="text-2xl font-bold text-gray-600">{totalRooms}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Available Rooms</h2>
          <p className="text-2xl font-bold text-green-600">{availableRooms}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Booked Rooms</h2>
          <p className="text-2xl font-bold text-red-600">{bookedRooms}</p>
        </div>
      </div>

      {/* Student List Section */}
      <div className="mb-6">
        <h2 className="text-2xl dark:text-white font-semibold text-gray-800 mb-4">Student List</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Sn</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Contact</th>
                <th className="border border-gray-300 px-4 py-2">Room No</th>
                <th className="border border-gray-300 px-4 py-2">Room Type</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.contact}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.roomNo}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.roomType}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredStudents.length === 0 && (
            <p className="text-center text-gray-600 mt-4">No students found.</p>
          )}
        </div>
      </div>

      {/* Available Room List Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Available Room List</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Sn</th>
                <th className="border border-gray-300 px-4 py-2">Room No</th>
                <th className="border border-gray-300 px-4 py-2">Type</th>
                <th className="border border-gray-300 px-4 py-2">Available</th>
              </tr>
            </thead>
            <tbody>
              {filteredRooms.map((room, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{room.roomNo}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{room.roomType}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {room.occupancy < room.maxOccupancy ? 'Yes' : 'No'}
                  </td>
                </tr>
              ))}
              {filteredRooms.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center text-gray-600 py-4">
                    No available rooms found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
