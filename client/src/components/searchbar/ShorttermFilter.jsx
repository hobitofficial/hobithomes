// File: src/components/FilterModal.jsx

import { useState } from "react";
import { FaTimes, FaFilter } from "react-icons/fa";

const FilterModal = ({ isOpen, onClose }) => {
  const [priceRange, setPriceRange] = useState([100, 500]);
  const [rooms, setRooms] = useState({
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
  });
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedBookingOptions, setSelectedBookingOptions] = useState([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const amenities = {
    "Recommended for you": [
      "Washing machine",
      "Wifi",
      "Private attached bathroom",
      "Kitchen",
      "Air conditioning",
      "TV",
      "Dryer",
      "water Purifier",
    ],
    Essentials: ["Heating", "Dedicated workspace", "Hair dryer", "Iron"],
    Features: [
      "Pool",
      "Hot tub",
      "Free parking",
      "EV charger",
      "Cot",
      "King bed",
      "Gym",
      "BBQ grill",
      "Breakfast",
      "Lunch",
      "Snacks",
      "Dinner",
      "Indoor fireplace",
      "Smoking allowed",
      "Parking Area",
    ],
    Safety: ["Smoke alarm", "Carbon monoxide alarm"],
  };

  const bookingOptions = ["Instant Book", "Self check-in", "Allows pets"];
  const propertyTypes = [
    "Hotel",
    "PG",
    "Hostel",
    "House",
    "Villa",
    "Flat",
    "Apartment",
    "Independent House",
    "Independent Floor",
    "Studio",
    "Duplex",
    "PentHouse",
    "Villa",
  ];
  const hostLanguages = [
    "Chinese",
    "English",
    "French",
    "German",
    "Spanish",
    "Arabic",
    "Hindi",
    "Indonesian",
    "Thai",
    "Bengali",
    "Gujarati",
    "Kannada",
    "Persian",
    "Punjabi",
    "Tamil",
    "Telugu",
    "Urdu",
    "Sign Language",
  ];

  const handleRangeChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = e.target.value;
    setPriceRange(newRange);
  };

  const handleRoomChange = (type, operation) => {
    setRooms((prevRooms) => ({
      ...prevRooms,
      [type]: Math.max(
        1,
        prevRooms[type] + (operation === "increase" ? 1 : -1)
      ),
    }));
  };

  const handleCheckboxChange = (option, list, setList) => {
    setList((prevList) =>
      prevList.includes(option)
        ? prevList.filter((item) => item !== option)
        : [...prevList, option]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Filters</h2>
          <button onClick={onClose}>
            <FaTimes className="text-gray-500 hover:text-gray-700 w-5 h-5" />
          </button>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Price Range
          </h3>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[0]}
              onChange={(e) => handleRangeChange(e, 0)}
              className="w-full"
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => handleRangeChange(e, 1)}
              className="w-full"
            />
          </div>
          <p className="text-gray-500 mt-1">
            Price: ${priceRange[0]} - ${priceRange[1]}
          </p>
        </div>

        {/* Rooms and Bedrooms */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Rooms and Bedrooms
          </h3>
          {["bedrooms", "beds", "bathrooms"].map((type) => (
            <div key={type} className="flex items-center justify-between my-2">
              <span className="capitalize text-gray-700">{type}</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleRoomChange(type, "decrease")}
                  className="px-2 py-1 bg-gray-200 rounded-full text-gray-700"
                >
                  -
                </button>
                <span>{rooms[type]}</span>
                <button
                  onClick={() => handleRoomChange(type, "increase")}
                  className="px-2 py-1 bg-gray-200 rounded-full text-gray-700"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Amenities</h3>
          {Object.entries(amenities).map(([category, items]) => (
            <div key={category} className="mb-4">
              <h4 className="text-md font-semibold text-gray-700 mb-2">
                {category}
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {items.map((amenity) => (
                  <label key={amenity} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedAmenities.includes(amenity)}
                      onChange={() =>
                        handleCheckboxChange(
                          amenity,
                          selectedAmenities,
                          setSelectedAmenities
                        )
                      }
                      className="mr-2"
                    />
                    <span className="text-gray-700">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Booking Options */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Booking Options
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {bookingOptions.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedBookingOptions.includes(option)}
                  onChange={() =>
                    handleCheckboxChange(
                      option,
                      selectedBookingOptions,
                      setSelectedBookingOptions
                    )
                  }
                  className="mr-2"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Property Type */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Property Type
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {propertyTypes.map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedPropertyTypes.includes(type)}
                  onChange={() =>
                    handleCheckboxChange(
                      type,
                      selectedPropertyTypes,
                      setSelectedPropertyTypes
                    )
                  }
                  className="mr-2"
                />
                <span className="text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Host Language */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Host Language
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {hostLanguages.map((language) => (
              <label key={language} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedLanguages.includes(language)}
                  onChange={() =>
                    handleCheckboxChange(
                      language,
                      selectedLanguages,
                      setSelectedLanguages
                    )
                  }
                  className="mr-2"
                />
                <span className="text-gray-700">{language}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Apply Filters Button */}
        <button
          onClick={onClose}
          className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg w-full mt-4"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

// Main component for handling modal
const ShorttermFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div>
      <button
        onClick={toggleFilter}
        className="bg-violet-600 text-white px-6 py-2 rounded-lg flex item-center gap-2 text-2xl"
      >
        <FaFilter />
        Filter
      </button>
      <FilterModal isOpen={isFilterOpen} onClose={toggleFilter} />
    </div>
  );
};

export default ShorttermFilter;
