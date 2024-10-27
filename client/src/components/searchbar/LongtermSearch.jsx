// File: src/components/SearchBar.jsx

import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const LongtermSearch = () => {
  const [transactionType, setTransactionType] = useState("Rent");
  const [location, setLocation] = useState("");

  return (
    <div className=" flex items-center bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-md mx-auto space-x-4">
      {/* Select for Rent, Lease, Buy */}
      <select
        value={transactionType}
        onChange={(e) => setTransactionType(e.target.value)}
        className="bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-0 focus:border-none"
      >
        <option value="Rent">Rent</option>
        <option value="Lease">Lease</option>
        <option value="Buy">Buy</option>
      </select>

      {/* Location Input */}
      <div className="flex items-center bg-gray-700 rounded-md px-4 py-2 w-full">
        <FaMapMarkerAlt className="text-violet-500 mr-2" />
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-gray-700 text-white w-full placeholder-gray-400 border-none focus:outline-none focus:ring-0 focus:border-none"
        />
      </div>

      {/* Search Button */}
      <button className="bg-violet-500 hover:bg-violet-700 text-white px-4 py-2 rounded-md">
        Search
      </button>
    </div>
  );
};

export default LongtermSearch;
