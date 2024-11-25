import React, { useState, useEffect } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BookingForm() {
  const [roomType, setRoomType] = useState("");
  const [roomFacility, setRoomFacility] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [arrivalDate, setArrivalDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    calculatePrice();
  }, [roomType, roomFacility]);

  const handleRoomFacilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRoomFacility((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value]
    );
  };

  const handleRoomTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoomType(e.target.value);
  };

  const calculatePrice = () => {
    let price = 0;
    if (roomType === "ac") {
      price = 2000;
    } else if (roomType === "non-ac") {
      price = 1500;
    }else{
      price = 1500;
    }
    if (roomFacility.includes("wifi")) price += 100;
    if (roomFacility.includes("food")) price += 1000;
    if (roomFacility.includes("balkani")) price += 1000;

    setTotalPrice(price);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // alert(`Booking Details:
    // Name: ${name}
    // Email: ${email}
    // Room No: ${roomNo}
    // Contact: ${contact}
    // Room Type: ${roomType}
    // Facilities: ${roomFacility.join(", ")}
    // Arrival Date: ${arrivalDate}
    // Checkout Date: ${checkoutDate}
    // Total Price: ₹${totalPrice}`);

    toast.success("Wait a few seconds")
    // Redirect to the Razorpay payment link
    setTimeout(() => {
      window.open("https://pages.razorpay.com/pl_NpwV7db9NsOHaI/view", "_blank");
    }, 2500);

    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 2000);

  };

  return (
    <>
      <section className=" fixed"  >
        <div className="relative mt-4 bg-white p-4 shadow-md">
          Total Price: ₹   <span className="text-lg font-semibold  text-green-700  ">{totalPrice}</span>
        </div>
      </section>
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">

        <h2 className="text-2xl font-semibold text-center mb-4">Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Room No.</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={roomNo}
              onChange={(e) => setRoomNo(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Contact</label>
            <input
              type="tel"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
          <div className="p-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Room Type
              </label>
              <select
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={roomType}
                onChange={handleRoomTypeChange}
                required
              >
                <option value="">Select Room Type</option>
                <option value="ac">AC</option>
                <option value="non-ac">Non-AC</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Room Facilities
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value="wifi"
                    onChange={handleRoomFacilityChange}
                  />
                  <span className="ml-2">Wi-Fi</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value="food"
                    onChange={handleRoomFacilityChange}
                  />
                  <span className="ml-2">Food</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value="balkani"
                    onChange={handleRoomFacilityChange}
                  />
                  <span className="ml-2">Balkani</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Arrival Date
              </label>
              <input
                type="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Checkout Date
              </label>
              <input
                type="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={checkoutDate}
                onChange={(e) => setCheckoutDate(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Book Now
            </button>
          </div>
        </form>
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </>
  );
}

export default BookingForm;
