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
<<<<<<< HEAD

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

=======
// import ReactReadMoreReadLess from "react-read-more-read-less";

const Property = () => {
  const { stayDuration } = useSelector((state) => state.searchs);

  const { properties } = useSelector((state) => state.property);
  const [currentPropertyIndex, setCurrentPropertyIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlaying && !isTouching) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSlide, isTouching]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === properties[currentPropertyIndex].images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? properties[currentPropertyIndex].images.length - 1 : prev - 1
    );
  };

  const handleTouchStart = (e) => {
    setIsTouching(true);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isTouching) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsTouching(false);
    }
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
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
<<<<<<< HEAD
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
=======
            <div key={index} className="max-w-6xl mx-auto p-4 text-white my-8">
              <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Image Carousel Section */}
                <div className="relative lg:w-1/2 h-[400px]">
                  <div
                    className="relative w-full h-full"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {property.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`absolute w-full h-full transition-opacity duration-500 ${
                          currentSlide === imgIndex
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
<<<<<<< HEAD
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
=======
                        <img
                          src={image}
                          alt={`Property view ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="absolute bottom-4 right-4 bg-black/80 p-2 rounded-full z-10 transition-colors"
                      aria-label={
                        isPlaying ? "Pause slideshow" : "Play slideshow"
                      }
                    >
                      {isPlaying ? <FaPause /> : <FaPlay />}
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
                    </button>
                  </div>

                  {/* Navigation Arrows */}
                  <button
<<<<<<< HEAD
                    onClick={() => prevSlide(index)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 p-2 rounded-full transition-colors"
=======
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y -1/2 bg-black/80 p-2 rounded-full transition-colors"
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
                    aria-label="Previous image"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
<<<<<<< HEAD
                    onClick={() => nextSlide(index)}
=======
                    onClick={nextSlide}
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 p-2 rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    <FaArrowRight />
                  </button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
<<<<<<< HEAD
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
=======
                    {property.images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => setCurrentSlide(imgIndex)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentSlide === imgIndex
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
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
<<<<<<< HEAD
                      {property.name}
                      <span className="text-violet-500 "> [2BHK]</span>
                    </h2>
                    <div className="flex flex-wrap gap-4 items-center justify-between"></div>
=======
                      {property.name}{" "}
                      <span className="text-violet-500"> [2BHK]</span>
                    </h2>
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
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
<<<<<<< HEAD
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
=======

                    <div className="flex justify-between mt-4">
                      <div className="flex items-center">
                        <FaBed className="mr-2 text-violet-500 text-3xl" />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center">
                        <FaBath className="mr-2 text-violet-500 text-3xl" />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center">
                        <FaRulerCombined className="mr-2 text-violet-500 text-3xl" />
                        <span>{property.sqft} sqft</span>
                      </div>
                    </div>
                  </div>

>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
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
<<<<<<< HEAD
}
=======
};

export default Property;
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
