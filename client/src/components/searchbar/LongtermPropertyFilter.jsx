// File: src/components/FilterModal.jsx

import React, { useState } from "react";
import { FaTimes, FaFilter } from "react-icons/fa";

const FilterModal = ({ isOpen, onClose }) => {
  const [bhkType, setBhkType] = useState([]);
  const [budget, setBudget] = useState([0, 200000]);
  const [listedBy, setListedBy] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [propertyType, setPropertyType] = useState([]);
  const [verified, setVerified] = useState(false);
  const [leaseType, setLeaseType] = useState([]);
  const [bathrooms, setBathrooms] = useState(1);
  const [builtUpArea, setBuiltUpArea] = useState([0, 200000]);
  const [ageOfProperty, setAgeOfProperty] = useState("");
  const [addedDate, setAddedDate] = useState("");
  const [availability, setAvailability] = useState("");
  const [powerBackup, setPowerBackup] = useState("");
  const [amenities, setAmenities] = useState([]);

  const bhkOptions = ["1BHK", "2BHK", "3BHK", "4BHK", "5BHK", "5+BHK"];
  const listedByOptions = ["Agent", "Owner", "Expert Pro Agents"];
  const furnishingOptions = [
    "Fully Furnished",
    "Semi Furnished",
    "Unfurnished",
  ];
  const propertyTypeOptions = [
    "Apartment",
    "Independent House",
    "Independent Floor",
    "Studio",
    "Duplex",
    "Penthouse",
    "Villa",
  ];
  const leaseTypeOptions = ["Family", "Company", "Bachelor"];
  const bathroomOptions = ["1+", "2+", "3+", "4+"];
  const ageOfPropertyOptions = [
    "Less than 1 year",
    "Less than 3 years",
    "Less than 5 years",
    "Less than 10 years",
    "More than 10 years",
  ];
  const addedOptions = [
    "Yesterday",
    "Last 3 days",
    "Last week",
    "Last 2 weeks",
    "Last month",
    "Last 2 months",
  ];
  const availabilityOptions = [
    "Within a week",
    "Within 15 days",
    "Within a month",
    "After a month",
  ];
  const powerBackupOptions = ["Partial", "Full"];
  const amenitiesOptions = [
    "Gated Community",
    "Lift",
    "Swimming Pool",
    "Gym",
    "Parking",
    "Gas Pipeline",
  ];

  const toggleSelection = (option, list, setList) => {
    setList((prevList) =>
      prevList.includes(option)
        ? prevList.filter((item) => item !== option)
        : [...prevList, option]
    );
  };

  // Corrected handleSliderChange to accept `event` as a parameter
  const handleSliderChange = (event, index, setState) => {
    const newRange = [...budget];
    newRange[index] = Number(event.target.value);
    setState(newRange);
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

        {/* BHK Type */}
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800">BHK Type</h3>
          <div className="flex space-x-2 mt-2">
            {bhkOptions.map((bhk) => (
              <button
                key={bhk}
                onClick={() => toggleSelection(bhk, bhkType, setBhkType)}
                className={`px-3 py-1 rounded-md ${
                  bhkType.includes(bhk)
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {bhk}
              </button>
            ))}
          </div>
        </div>

        {/* Budget Slider */}
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800">Budget</h3>
          <div className="flex items-center space-x-4 mt-2">
            <input
              type="range"
              min="0"
              max="200000"
              value={budget[0]}
              onChange={(e) => handleSliderChange(e, 0, setBudget)}
              className="w-full"
            />
            <input
              type="range"
              min="0"
              max="200000"
              value={budget[1]}
              onChange={(e) => handleSliderChange(e, 1, setBudget)}
              className="w-full"
            />
          </div>
          <p className="text-gray-500 mt-1">
            Price: ₹{budget[0]} - ₹{budget[1]}
          </p>
        </div>

        {/* Listed By */}
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800">Listed By</h3>
          <div className="flex space-x-2 mt-2">
            {listedByOptions.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name="listedBy"
                  value={option}
                  checked={listedBy === option}
                  onChange={() => setListedBy(option)}
                  className="mr-2"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Furnishing */}
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800">Furnishing</h3>
          <div className="flex space-x-2 mt-2">
            {furnishingOptions.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name="furnishing"
                  value={option}
                  checked={furnishing === option}
                  onChange={() => setFurnishing(option)}
                  className="mr-2"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Property Type */}
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800">Property Type</h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {propertyTypeOptions.map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="checkbox"
                  checked={propertyType.includes(type)}
                  onChange={() =>
                    toggleSelection(type, propertyType, setPropertyType)
                  }
                  className="mr-2"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Apply Filters Button */}
        <button
          onClick={onClose}
          className=" bg-violet-500 hover:bg-violet-700 text-white px-4 py-2 rounded-lg w-full mt-4"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

// Main component for opening modal
const LongtermPropertyFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setIsFilterOpen(true)}
        className="flex items-center gap-2 bg-violet-500 hover:bg-violet-700 text-white px-6 py-2 rounded-lg"
      >
        <FaFilter />
        Filter
      </button>
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
};

export default LongtermPropertyFilter;
