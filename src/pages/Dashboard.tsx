import React, { useState } from 'react';

const Dashboard = () => {
  // Dummy data for rooms and students
  const rooms = [
    { roomNo: '101', type: 'AC', available: false, students: [{ name: 'John Doe', contact: '1234567890' }] },
    { roomNo: '103', type: 'AC', available: false, students: [{ name: 'Jane Smith', contact: '0987654321' }] },
    { roomNo: '104', type: 'Non-AC', available: false, students: [{ name: 'Mark Lee', contact: '1122334455' }] },
    { roomNo: '117', type: 'AC', available: true, students: [] },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Filter rooms based on search (only available rooms)
  const filteredRooms = rooms.filter(
    (room) =>
      room.available && (
        room.roomNo.includes(searchTerm) ||
        room.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        room.students.some(
          (student) =>
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.contact.includes(searchTerm)
        )
      )
  );

  // Flatten all students with room info for the student list
  const allStudents = rooms.flatMap((room) =>
    room.students.map((student) => ({
      ...student,
      roomNo: room.roomNo,
      roomType: room.type,
    }))
  );

  // Filter students based on search
  const filteredStudents = allStudents.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.contact.includes(searchTerm) ||
      student.roomNo.includes(searchTerm) ||
      student.roomType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalRooms = rooms.length;
  const bookedRooms = rooms.filter((room) => room.available).length;
  const availableRooms = totalRooms - bookedRooms;

  return (
    <div className="p-6">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white   ">Hostel Management Dashboard</h1>
        <button    
        
        className="bg-blue-500 text-white px-4 py-2 dark:text-white rounded-lg hover:bg-blue-600">
          
          <a href="/new-booking"> New Booking</a>
          
          
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
          <h2 className="text-xl font-semibold text-gray-800   ">Total Rooms</h2>
          <p className="text-2xl font-bold text-gray-600">{totalRooms}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold  text-gray-800">Available Rooms</h2>
          <p className="text-2xl font-bold text-green-600">{bookedRooms}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Booked Rooms</h2>
          <p className="text-2xl font-bold text-red-600">{availableRooms}</p>
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
          room.available && ( // Only show available rooms
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{room.roomNo}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{room.type}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {room.available ? 'Yes' : 'No'}
              </td>
            </tr>
          )
        ))}
        {filteredRooms.length === 0 && (
          <tr>
            <td colSpan={5} className="text-center text-gray-600 py-4">
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
