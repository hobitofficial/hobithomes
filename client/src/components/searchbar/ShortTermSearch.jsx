import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";

export default function ShortTermSearch() {
  const [location, setLocation] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const handleGuestChange = (type, operation) => {
    setGuests((prevGuests) => ({
      ...prevGuests,
      [type]: Math.max(
        0,
        prevGuests[type] + (operation === "increase" ? 1 : -1)
      ),
    }));
  };

  return (
    <div className="  flex flex-col md:flex-row items-center justify-between bg-gray-800 shadow-lg rounded-lg p-4 space-y-4 md:space-y-0 md:space-x-4 max-w-5xl mx-auto">
      {/* Location Input */}
      <div className="flex items-center border border-gray-300 rounded-lg w-full md:w-auto p-2">
        <FaMapMarkerAlt className="text-3xl text-violet-500" />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="outline-none text-white w-full bg-gray-800  placeholder:text-white border-none focus:border-none focus:ring-0"
        />
      </div>

      {/* Duration Input */}
      <div className="flex items-center border border-gray-300 rounded-lg p-2 w-full md:w-auto">
        <FaCalendarAlt className="text-3xl text-violet-500 mx-2" />
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full items-center text-xl  text-white gap-2">
          <span>From:</span>
          <input
            type="date"
            placeholder="From"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="outline-none border-none text-white w-full placeholder:text-white bg-gray-800 focus:border-none focus:ring-0"
          />
          <span>To:</span>

          <input
            type="date"
            placeholder="To"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="outline-none border-none text-white w-full placeholder:text-white bg-gray-800 focus:border-none focus:ring-0"
          />
        </div>
      </div>

      {/* Guests Input */}
      <div className="flex items-center border border-gray-300 rounded-lg p-2 w-full md:w-auto relative">
        <FaUser className="text-3xl text-violet-500" />
        <div className="ml-2">
          <button
            type="button"
            className="text-white outline-none"
            onClick={() =>
              setGuests((prev) => ({ ...prev, isOpen: !prev.isOpen }))
            }
          >
            {guests.adults + guests.children} Guests
          </button>
        </div>

        {/* Dropdown for Guests */}
        {guests.isOpen && (
          <div className="absolute top-12 left-0 bg-gray-800 border border-gray-300 rounded-lg s text-white shadow-lg p-4 w-48 z-10">
            {["adults", "children", "infants", "pets"].map((type) => (
              <div
                key={type}
                className="flex items-center justify-between my-2 "
              >
                <span className="capitalize">{type}</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleGuestChange(type, "decrease")}
                    className="px-2 py-1 bg-gray-200 rounded-full text-gray-700 focus:outline-none"
                  >
                    -
                  </button>
                  <span>{guests[type]}</span>
                  <button
                    onClick={() => handleGuestChange(type, "increase")}
                    className="px-2 py-1 bg-gray-200 rounded-full text-gray-700 focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Search Button */}
      <button className="bg-violet-600 text-2xl text-white px-6 py-2 rounded-lg w-full md:w-auto hover:bg-violet-700">
        Search
      </button>
    </div>
  );
}
