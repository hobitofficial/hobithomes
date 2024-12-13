import ReactReadMoreReadLess from "react-read-more-read-less";
import { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaPlay,
  FaPause,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import Searchterm from "../searchbar/Searchterm";
import ShortTermSearch from "../searchbar/ShortTermSearch";
import LongtermSearch from "../searchbar/LongtermSearch";
import ShorttermFilter from "../searchbar/ShorttermFilter";
import LongtermPropertyFilter from "../searchbar/LongtermPropertyFilter";

export default function Property() {
  const { stayDuration } = useSelector((state) => state.searchs);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [properties, setProperties] = useState([]);
  const [playStates, setPlayStates] = useState([]);
  const [currentSlides, setCurrentSlides] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `http://localhost:8000/api/property/periodicProperty/${stayDuration}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) {
          const errorMessage = await res.json();
          alert("Something went wrong while fetching your properties!");
          setError(
            errorMessage || "Something went wrong while showing properties!"
          );
          return;
        }

        const data = await res.json();
        setProperties(data.properties);
        setError(null); // Clear any previous errors
      } catch (err) {
        console.error("Error fetching properties:", err);
        alert("Something went wrong while showing properties!");
        setError(err.message); // Set the error state
      } finally {
        setLoading(false); // Ensure loading is set to false in both success and error cases
      }
    };

    fetchProperties();
  }, [stayDuration]); // Only depend on stayDuration

  useEffect(() => {
    if (properties.length > 0) {
      setPlayStates(properties.map(() => true));
      setCurrentSlides(properties.map(() => 0));
    }
  }, [properties]);

  useEffect(() => {
    const intervals = currentSlides.map((_, index) => {
      if (playStates[index]) {
        return setInterval(() => {
          nextSlide(index);
        }, 3000);
      }
      return null;
    });

    return () => {
      intervals.forEach((interval) => interval && clearInterval(interval));
    };
  }, [playStates, currentSlides]);

  const nextSlide = (propertyIndex) => {
    setCurrentSlides((prev) => {
      const newSlides = [...prev];
      newSlides[propertyIndex] =
        (newSlides[propertyIndex] + 1) % properties[propertyIndex].media.length;
      return newSlides;
    });
  };

  const prevSlide = (propertyIndex) => {
    setCurrentSlides((prev) => {
      const newSlides = [...prev];
      newSlides[propertyIndex] =
        (newSlides[propertyIndex] -
          1 +
          properties[propertyIndex].media.length) %
        properties[propertyIndex].media.length;
      return newSlides;
    });
  };

  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;
  if (loading)
    return <div className="text-center text-white">Loading properties...</div>;

  if (stayDuration !== null) {
    return (
      <div className="mt-24">
        <div>
          {stayDuration === "shortTerm" && (
            <div className="flex flex-wrap items-center justify-center gap-12">
              <span>
                {" "}
                <ShortTermSearch />
              </span>
              <span>
                {" "}
                <ShorttermFilter />
              </span>
            </div>
          )}
          {stayDuration === "longTerm" && (
            <div className="flex flex-wrap items-center justify-center gap-24">
              <span>
                <LongtermSearch />
              </span>
              <span>
                <LongtermPropertyFilter />
              </span>
            </div>
          )}
        </div>

        {properties.length === 0 ? (
          <div className="text-red-500">No properties available.</div>
        ) : (
          properties.map((property, index) => (
            <div
              key={property._id}
              className="max-w-6xl mx-auto p-4 text-white my-8"
            >
              <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Image Carousel Section */}
                <div className="relative lg:w-1/2 h-[400px]">
                  <div>
                    {property.media.map((mediaItem, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`absolute w-full h-full transition-opacity duration-500 ${
                          currentSlides[index] === imgIndex
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        {mediaItem.type === "image" ? (
                          <img
                            src={mediaItem.url}
                            alt="Image not found"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <video
                            className="w-full h-full object-cover z-30"
                            controls
                          >
                            <source src={mediaItem.url} type="video/mp4" />
                            <source
                              src={mediaItem.url.replace(".mp4", ".webm")}
                              type="video/webm"
                            />
                            <source
                              src={mediaItem.url.replace(".mp4", ".ogv")}
                              type="video/ogg"
                            />
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        setPlayStates((prev) => {
                          const newStates = [...prev];
                          newStates[index] = !newStates[index];
                          return newStates;
                        });
                      }}
                      className="absolute bottom-4 right-4 bg-black/80 p-2 rounded-full z-10 transition-colors"
                      aria-label={
                        playStates[index] ? "Pause slideshow" : "Play slideshow"
                      }
                    >
                      {playStates[index] ? <FaPause /> : <FaPlay />}
                    </button>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => prevSlide(index)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 p-2 rounded-full transition-colors"
                    aria-label="Previous image"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    onClick={() => nextSlide(index)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 p-2 rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    <FaArrowRight />
                  </button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {property.media.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => {
                          setCurrentSlides((prev) => {
                            const newSlides = [...prev];
                            newSlides[index] = imgIndex;
                            return newSlides;
                          });
                        }}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentSlides[index] === imgIndex
                            ? "bg-violet-500"
                            : "bg-white/50"
                        }`}
                        aria-label={`Go to slide ${imgIndex + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Property Information Section */}
                <div className="lg:w-1/2 p-6 flex flex-col justify-between bg-gray-800">
                  <div>
                    <h2 className="text-3xl font-bold mb-2 text-white">
                      {property.name}
                      <span className="text-violet-500 "> [2BHK]</span>
                    </h2>
                    <div className="flex flex-wrap gap-4 items-center justify-between"></div>
                    <div className="flex items-center text-gray-400 mb-4">
                      <FaMapMarkerAlt className="mr-2 text-violet-500" />
                      <span>{property.location}</span>
                    </div>
                    <div className="text-gray-400 text-lg">
                      <ReactReadMoreReadLess
                        charLimit={120}
                        readMoreText={
                          <span className="text-violet-500 cursor-pointer">
                            Read more ▼
                          </span>
                        }
                        readLessText={
                          <span className="text-violet-500 cursor-pointer">
                            Read less ▲
                          </span>
                        }
                      >
                        {property.description}
                      </ReactReadMoreReadLess>
                    </div>
                    <div className="flex justify-between mt-4">
                      <div className="flex items-center">
                        <FaBed className="mr-2 text-violet-500 text-3xl" />
                        <span>{property.rooms.beds} Beds</span>
                      </div>
                      <div className="flex items-center">
                        <FaBed className="mr-2 text-violet-500 text-3xl" />
                        <span>{property.rooms.bedrooms} Bedrooms</span>
                      </div>
                      <div className="flex items-center">
                        <FaBath className="mr-2 text-violet-500 text-3xl" />
                        <span>{property.rooms.bathrooms} Baths</span>
                      </div>
                      <div className="flex items-center">
                        <FaRulerCombined className="mr-2 text-violet-500 text-3xl" />
                        <span>
                          {property.sqft ? property.sqft : "100"} sqft
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <p className="text-md font-semibold text-gray-500">
                        Price <br />
                        <span>
                          Rs.{" "}
                          <span className="line-through">
                            {property.pseudoprice}
                          </span>
                        </span>
                      </p>
                      <p className="text-lg font-bold text-white">
                        Rs. <span>{property.price}</span>
                      </p>
                    </div>
                    <button className="bg-transparent border border-violet-500 text-violet-500 py-2 px-6 rounded-md hover:bg-violet-500 hover:text-white transition">
                      Property Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    );
  } else {
    return <Searchterm />;
  }
}
