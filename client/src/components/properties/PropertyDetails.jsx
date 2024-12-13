import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FaMapMarkerAlt, FaRulerCombined, FaBed, FaBath } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function PropertyDetails({ properties }) {
  // const { properties } = useSelector((state) => state.property);
  console.log(properties);
  const handleDragStart = (e) => e.preventDefault();

  // Carousel items for images
  const imageItems = properties.images.map((image, index) => (
    <img
      key={index}
      src={image}
      onDragStart={handleDragStart}
      role="presentation"
      alt={`Property Image ${index + 1}`}
      className="rounded-lg w-full h-[300px] object-cover"
    />
  ));

  // Carousel items for videos
  const videoItems = properties.videos.map((video, index) => (
    <video
      key={index}
      src={video}
      onDragStart={handleDragStart}
      role="presentation"
      controls
      loop
      className="rounded-lg w-full h-[300px] object-cover"
    />
  ));

  return (
    <div className="max-w-6xl m-auto my-24 text-white flex flex-col items-center gap-10 px-4 bg-gray-900 p-6 rounded-lg shadow-lg ">
      {/* Property Title and Type */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          {properties.name}{" "}
          <span className="text-violet-500">[{properties.type}]</span>
        </h1>
        <p className="text-gray-400 flex items-center justify-center mt-2">
          <FaMapMarkerAlt className="mr-2 text-violet-500" />
          {properties.location}
        </p>
      </div>

      {/* Image Carousel */}
      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Property Images
        </h2>
        <AliceCarousel
          mouseTracking
          items={imageItems}
          autoPlay
          autoPlayInterval={3000}
          infinite
          disableDotsControls={false}
          disableButtonsControls={false}
        />
      </div>

      {/* Video Carousel */}
      {properties.videos && properties.videos.length > 0 && (
        <div className="w-full max-w-2xl mt-6">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Property Videos
          </h2>
          <AliceCarousel
            mouseTracking
            items={videoItems}
            autoPlay
            autoPlayInterval={3000}
            infinite
            disableDotsControls={false}
            disableButtonsControls={false}
          />
        </div>
      )}

      {/* Property Details Section */}
      <div className="flex flex-col w-full  ">
        <h3 className="text-2xl font-bold mb-4">Property Details</h3>
        <p className="text-gray-400 text-lg mb-4">{properties.description}</p>
        <div className="grid grid-cols-2 gap-4 text-gray-300">
          <div className="flex items-center">
            <FaBed className="mr-2 text-violet-500" />
            <span>{properties.beds} Beds</span>
          </div>
          <div className="flex items-center">
            <FaBath className="mr-2 text-violet-500" />
            <span>{properties.baths} Baths</span>
          </div>
          <div className="flex items-center">
            <FaRulerCombined className="mr-2 text-violet-500" />
            <span>{properties.area} sqft</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-300">Type:</span>
            <span className="ml-2">{properties.type}</span>
          </div>
        </div>

        {/* Facilities */}
        {properties.facilities && properties.facilities.length > 0 && (
          <div className="mt-6">
            <h4 className="text-xl font-semibold text-white mb-3">
              Facilities
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-gray-300">
              {properties.facilities.map((facility, index) => (
                <li key={index} className="flex items-center">
                  <span className="ml-2">{facility}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Pricing */}
        <div className="mt-6 flex justify-between items-center">
          <div className="text-gray-400">
            <p>
              Pseudo Price:{" "}
              <span className="line-through">Rs. {properties.pseudoPrice}</span>
            </p>
            <p className="text-2xl font-bold text-white">
              Rs. {properties.price}
            </p>
          </div>
          <button className="bg-violet-500 text-white py-2 px-6 rounded-md hover:bg-violet-600 transition">
            Contact Owner
          </button>
        </div>
      </div>
    </div>
  );
}

// Sample properties object to demonstrate how to pass properties details
PropertyDetails.defaultProps = {
  properties: {
    name: "Luxurious Villa",
    type: "Villa",
    location: "Los Angeles, CA",
    description:
      "An exquisite villa with modern amenities and a beautiful view.",
    images: [
      "https://via.placeholder.com/800x400?text=Image+1",
      "https://via.placeholder.com/800x400?text=Image+2",
      "https://via.placeholder.com/800x400?text=Image+3",
    ],
    videos: [
      "https://www.w3schools.com/html/mov_bbb.mp4",
      "https://www.w3schools.com/html/mov_bbb.mp4",
    ],
    beds: 4,
    baths: 3,
    area: 3500,
    pseudoPrice: "1,00,00,000",
    price: "85,00,000",
    facilities: [
      "Swimming Pool",
      "Gym",
      "Wi-Fi",
      "Air Conditioning",
      "Parking",
    ],
  },
};
