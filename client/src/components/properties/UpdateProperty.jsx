import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  setLoading,
  setError,
  clearError,
} from "../../redux/property/propertySlice.js";

export default function UpdateProperty() {
  const dispatch = useDispatch();
  const { error, loading, updateProperty } = useSelector(
    (state) => state.property
  );

  // State for property details
  const [rooms, setRooms] = useState({
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [propertyName, setPropertyName] = useState("");
  const [location, setLocation] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedBookingOptions, setSelectedBookingOptions] = useState([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [listedBy, setListedBy] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [description, setDescription] = useState("");
  const [propertyPurpose, setPropertyPurpose] = useState("rent");
  const [bhkOptions, setBhkOptions] = useState([]);
  const [term, setTerm] = useState("");
  const [minStayDuration, setMinStayDuration] = useState({
    value: 1,
    unit: "days",
  });
  const [guests, setGuests] = useState(0);
  const [pseudoPrice, setPseudoPrice] = useState(0);
  const [price, setPrice] = useState(0);

  // Dropdown data options
  const amenities = {
    "Recommended for you": [
      "Washing machine",
      "Wifi",
      "Private attached bathroom",
      "Kitchen",
      "Air conditioning",
      "TV",
      "Dryer",
      "Water Purifier",
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
  const listedByOptions = ["Owner", "Agent", "Expert Pro Agents"];
  const furnishingOptions = [
    "Fully Furnished",
    "Semi Furnished",
    "Unfurnished",
  ];
  const bookingOptions = ["Instant Book", "Self check-in", "Allows pets"];
  const pseudoPropertytypes = [
    "House",
    "Villa",
    "Flat",
    "Apartment",
    "Independent House",
    "Independent Floor",
    "Studio",
    "Duplex",
    "PentHouse",
  ];
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
  ];
  const bhkOptionsList = [
    "1BHK",
    "2BHK",
    "3BHK",
    "4BHK",
    "5BHK",
    "5+BHK",
    "1RK",
    "2RK",
    "2+RK",
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

  // Load existing property data when the component mounts
  useEffect(() => {
    if (updateProperty) {
      setPropertyName(updateProperty.propertyName);
      setLocation(updateProperty.location);
      setRooms(updateProperty.rooms);
      setSelectedAmenities(updateProperty.selectedAmenities || []);
      setSelectedBookingOptions(updateProperty.selectedBookingOptions || []);
      setSelectedPropertyTypes(updateProperty.selectedPropertyTypes || []);
      setSelectedLanguages(updateProperty.selectedLanguages || []);
      setListedBy(updateProperty.listedBy);
      setFurnishing(updateProperty.furnishing);
      setDescription(updateProperty.description);
      setPropertyPurpose(updateProperty.propertyPurpose);
      setBhkOptions(updateProperty.bhkOptions || []);
      setTerm(updateProperty.term);
      setMinStayDuration(updateProperty.minStayDuration);
      setGuests(updateProperty.guests);
      setPseudoPrice(updateProperty.pseudoPrice);
      setPrice(updateProperty.price);
    }
  }, [updateProperty]);

  const toggleSelection = (option, list, setList) => {
    setList((prevList) =>
      prevList.includes(option)
        ? prevList.filter((item) => item !== option)
        : [...prevList, option]
    );
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

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles((prevFiles) => {
      const allFiles = [...prevFiles, ...files];
      return allFiles.filter(
        (file, index, self) =>
          index ===
          self.findIndex((f) => f.name === file.name && f.size === file.size)
      );
    });
  };

  const handleRemoveFile = (fileName) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((file) => file.name !== fileName)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      price <= 0 ||
      pseudoPrice <= 0 ||
      guests <= 0 ||
      term === null ||
      furnishing === null ||
      listedBy === null
    ) {
      alert(
        "Please enter valid 1. price 2. guests 3. select short term or long term 4. furnishing 5. ListedBy"
      );
      return;
    }

    dispatch(setLoading());

    const formData = new FormData();
    formData.append("propertyPurpose", propertyPurpose);
    formData.append("term", term);
    formData.append("minStayDuration", JSON.stringify(minStayDuration));
    formData.append("guests", Number(guests));
    formData.append("pseudoPrice", Number(pseudoPrice));
    formData.append("price", Number(price));
    formData.append("rooms", JSON.stringify(rooms));
    formData.append("selectedAmenities", JSON.stringify(selectedAmenities));
    formData.append(
      "selectedBookingOptions",
      JSON.stringify(selectedBookingOptions)
    );
    formData.append(
      "selectedPropertyTypes",
      JSON.stringify(selectedPropertyTypes)
    );
    formData.append("selectedLanguages", JSON.stringify(selectedLanguages));
    formData.append("listedBy", listedBy);
    formData.append("furnishing", furnishing);
    formData.append("bhkOptions", JSON.stringify(bhkOptions));
    formData.append("description", description);
    for (let i = 0; i < uploadedFiles.length; i++) {
      formData.append("uploadedFiles", uploadedFiles[i]);
    }
    console.log(formData);
    try {
      const response = await axios.put(
        `http://localhost:5173/api/property/updateProperty/${updateProperty._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response.status !== 200) {
        dispatch(
          setError(
            response.data.message || "Error updating property, try again!"
          )
        );
        alert("Error updating property, try again!");
        return;
      }

      dispatch(clearError());
      alert("Property updated successfully!");
    } catch (err) {
      dispatch(setError("Network error. Please try again."));
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Update Property
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto space-y-6 z-10"
      >
        {/* Files upload */}
        <div>
          <label className="flex items-center text-violet-400 mb-2">
            Upload New Images/Videos
          </label>
          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            className="border border-gray-500 form-checkbox text-violet-600 mr-2 w-full"
          />
        </div>
        {/* Display Uploaded Files */}
        <div className="mt-4">
          <h3 className="text-md font-semibold text-gray-800 mb-2">
            Uploaded Files:
          </h3>
          <ul className="list-disc ml-6">
            {uploadedFiles.map((file, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{file.name}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveFile(file.name)}
                  className="text-red-600 text-sm ml-4"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Property Name */}
        <div>
          <label className="block text-sm font-medium text-violet-400">
            Property Name
          </label>
          <input
            required
            type="text"
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
            className="w-full p-2 mt-2 rounded bg-gray-700 text-white"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-violet-400">
            Location
          </label>
          <input
            required
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 mt-2 rounded bg-gray-700 text-white"
          />
        </div>

        {/* Property Purpose */}
        <div>
          <label className="block text-md font-medium text-violet-400">
            Property Purpose
          </label>
          <select
            value={propertyPurpose}
            onChange={(e) => setPropertyPurpose(e.target.value)}
            className="w-full p-2 mt-2 rounded bg-gray-700 text-white"
          >
            <option value="rent">Rent</option>
            <option value="lease">Lease</option>
            <option value="buy">Buy</option>
          </select>
        </div>

        {/* Term */}
        <div>
          <label className="block text-md font-medium text-violet-400">
            Client comes to your Property for
          </label>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="term"
                value="shortTerm"
                checked={term === "shortTerm"}
                onChange={(e) => setTerm(e.target.value)}
                className="form-radio text-violet-600 mr-2"
              />
              Short Term
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="term"
                value="longTerm"
                checked={term === "longTerm"}
                onChange={(e) => setTerm(e.target.value)}
                className="form-radio text-violet-600 mr-2"
              />
              Long Term
            </label>
          </div>
        </div>

        {/* Minimum Stay Duration */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-violet-400">
              Minimum Duration of Stay
            </label>
            <div className="flex items-center mt-2">
              <input
                type="number"
                value={minStayDuration.value}
                onChange={(e) =>
                  setMinStayDuration({
                    ...minStayDuration,
                    value: e.target.value,
                  })
                }
                className="w-20 p-2 rounded bg-gray-700 text-white mr-2"
              />
              <select
                value={minStayDuration.unit}
                onChange={(e) =>
                  setMinStayDuration({
                    ...minStayDuration,
                    unit: e.target.value,
                  })
                }
                className="p-2 rounded bg-gray-700 text-white"
              >
                <option value="days">Days</option>{" "}
                <option value="weeks">Weeks</option>
                <option value="months">Months</option>
                <option value="years">Years</option>
              </select>
            </div>
          </div>

          {/* Number of Guests */}
          <div>
            <label className="block text-sm font-medium text-violet-400">
              Number of Guests
            </label>
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full p-2 mt-2 rounded bg-gray-700 text-white"
            />
          </div>
        </div>

        {/* Price Inputs */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-violet-400">
              Pseudo Price
            </label>
            <input
              required
              type="number"
              value={pseudoPrice}
              onChange={(e) => setPseudoPrice(e.target.value)}
              className="w-full p-2 mt-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-violet-400">
              Price
            </label>
            <input
              required
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 mt-2 rounded bg-gray-700 text-white"
            />
          </div>
        </div>

        {/* Rooms and Bedrooms */}
        <div>
          <h3 className="text-lg font-semibold text-violet-400">
            Rooms and Bedrooms
          </h3>
          {["bedrooms", "beds", "bathrooms"].map((type) => (
            <div key={type} className="flex items-center justify-between my-2">
              <span className="capitalize">{type}</span>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => handleRoomChange(type, "decrease")}
                  className="px-2 py-1 bg-gray-700 text-white rounded-full"
                >
                  -
                </button>
                <span>{rooms[type]}</span>
                <button
                  type="button"
                  onClick={() => handleRoomChange(type, "increase")}
                  className="px-2 py-1 bg-gray-700 text-white rounded-full"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-violet-400 mb-2">
            Amenities
          </h3>
          {Object.entries(amenities).map(([category, items]) => (
            <div key={category} className="mb-4">
              <h4 className="text-md font-semibold text-violet-300 mb-2">
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
                    <span>{amenity}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Booking Options */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-violet-400 mb-2">
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
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Property Type */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-violet-400 mb-2">
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
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* BHK Options */}
        {selectedPropertyTypes.some((type) =>
          pseudoPropertytypes.includes(type)
        ) && (
          <div className="text-lg font-semibold">
            <h3>BHK Type</h3>
            <div className="flex flex-wrap space-x-2 mt-2">
              {bhkOptionsList.map((bhk) => (
                <button
                  key={bhk}
                  type="button"
                  onClick={() =>
                    toggleSelection(bhk, bhkOptions, setBhkOptions)
                  }
                  className={`px-3 py-1 rounded-md ${
                    bhkOptions.includes(bhk)
                      ? "bg-violet-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {bhk}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Furnishing */}
        <div>
          <h3 className="text-lg font-medium text-violet-400">Furnishing</h3>
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

        {/* Listed By */}
        <div className="mb-4">
          <h3 className="text-lg font-medium text-violet-400">Listed By</h3>
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

        {/* Host Language */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-violet-400 mb-2">
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
                <span>{language}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Description Inputs */}
        <div>
          <label className="block text-sm font-medium text-violet-400">
            Description
          </label>
          <textarea
            required
            placeholder="Write something about your property"
            name="description"
            id="description"
            minLength={20}
            maxLength={200}
            className="w-full p-2 mt-2 rounded bg-gray-700 text-white"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {error && (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
            role="alert"
          >
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded mt-6"
        >
          Update Property
        </button>
      </form>
    </div>
  );
}
