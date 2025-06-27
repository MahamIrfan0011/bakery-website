"use client"; // Ensure this component is a Client Component


import React, { useEffect, useState } from 'react';

export default function Order() {
  const [isLoading, setIsLoading] = useState(true); // State to control loading

  // Simulate loading when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 1 seconds
    }, 1000); // Change the duration as needed

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg">Loading... Please wait.</p>
        {/* You can replace the text with a spinner or loading animation */}
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Place Your Order</h2>
      <p className="text-center mb-6">Choose your favorite treats from our menu and place an order for pickup or delivery!</p>

      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="item">
            Select Item
          </label>
          <select
            id="item"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option>Cake</option>
            <option>Pastry</option>
            <option>Bread</option>
            <option>Cookies</option>
            <option>Cupcakes</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="quantity">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            min="1"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md mb-2"
            placeholder="Enter quantity"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md mb-2"
            placeholder="Enter your name"
            required
          />

          <label className="block text-sm font-medium text-gray-700" htmlFor="location">
            Your Location
          </label>
          <input
            type="text"
            id="location"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md mb-2"
            placeholder="Enter your location"
            required
          />

          <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
            Your Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md mb-2"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

  
  
