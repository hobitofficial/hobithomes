<<<<<<< HEAD
import { useState, useEffect, useCallback, useRef } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import {
  FaArrowLeft,
  FaArrowRight,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";

export default function PropertyToShowUser() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentSlides, setCurrentSlides] = useState([]); // Track current slide for each property
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "http://localhost:8000/api/property/hostelAndPgProperty",
          {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          const errorData = await response.json();
          setError(
            errorData || "Something went wrong while fetching properties!"
          );
          return;
        }
        const data = await response.json();
        setProperties(data.properties);
        setCurrentSlides(new Array(data.properties.length).fill(0)); // Initialize current slides for each property
      } catch (error) {
        setError(
          "Something went wrong while fetching properties or network error!"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  useEffect(() => {
    const intervals = properties.map((_, index) => {
      if (isPlaying) {
        return setInterval(() => {
          setCurrentSlides((prevSlides) => {
            const newSlides = [...prevSlides];
            newSlides[index] =
              (newSlides[index] + 1) % properties[index].media.length;
            return newSlides;
          });
        }, 3000);
      }
      return null;
    });

    return () =>
      intervals.forEach((interval) => interval && clearInterval(interval));
  }, [isPlaying, properties]);

  const nextCardSlide = useCallback(() => {
    setCurrentCardIndex((prevIndex) =>
=======
// import { useEffect, useState } from "react";
import { RiStarSFill } from "react-icons/ri";

import { useState, useEffect, useCallback, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function PropertyToShowUser() {
  const { properties } = useSelector((state) => state.property);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
      prevIndex === properties.length - 1 ? 0 : prevIndex + 1
    );
  }, [properties.length]);

<<<<<<< HEAD
  const prevCardSlide = () => {
    setCurrentCardIndex((prevIndex) =>
=======
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
      prevIndex === 0 ? properties.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let intervalId;
<<<<<<< HEAD

    if (!isHovered) {
      intervalId = setInterval(() => {
        nextCardSlide();
      }, 5000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [nextCardSlide, isHovered]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <section className="flex flex-col bg-black text-white p-20">
=======
    if (!isHovered) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [isHovered, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide]);

  return (
    <section className="flex flex-col flex-wrap bg-black text-white w-full h-auto p-20">
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
      <div className="flex gap-1 items-center my-2">
        <RiStarSFill className="text-2xl text-orange-300" />
        <RiStarSFill className="text-xl text-orange-300" />
        <RiStarSFill className="text-md text-orange-300" />
      </div>
<<<<<<< HEAD
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold">Property Featured</h2>
        <div className="my-2 w-full">
          <p className="text-gray-400 text-md font-thin w-1/2">
            Explore our handpicked selections of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein. Click &quot;
            <a href="/properties" className="text-white cursor-pointer">
              View Details
            </a>
            &quot; for more information.
          </p>
        </div>
      </div>
      <div
        className="overflow-hidden relative max-w-7xl m-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="region"
        aria-label="Real Estate Properties Carousel"
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentCardIndex * 100}%)`,
          }}
        >
          {properties.length === 0 ? (
            <div className="text-red-500">No properties available.</div>
          ) : (
            properties.map((property, index) => (
              <div
                key={property._id}
                className="min-w-full mx-auto p-4 text-white my-8"
              >
                <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Image Carousel Section */}
                  <div className="relative lg:w-1/2 h-[400px]">
                    <div className="relative w-full h-full">
                      {property.media.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`absolute w-full h-full transition-opacity duration-500 ${
                            currentSlides[index] === imgIndex
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          {image.type === "image" ? (
                            <img
                              src={image.url}
                              alt={`Property view ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <video
                              className="w-full h-full object-cover z-30"
                              controls
                            >
                              <source src={image.url} type="video/mp4" />
                              <source
                                src={image.url.replace(".mp4", ".webm")}
                                type="video/webm"
                              />
                              <source
                                src={image.url.replace(".mp4", ".ogv")}
                                type="video/ogg"
                              />
                              Your browser does not support the video tag.
                            </video>
                          )}
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
                      </button>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                      onClick={() => {
                        const newSlides = [...currentSlides];
                        newSlides[index] =
                          (newSlides[index] - 1 + property.media.length) %
                          property.media.length;
                        setCurrentSlides(newSlides);
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 p-2 rounded-full transition-colors"
                      aria-label="Previous image"
                    >
                      <FaArrowLeft />
                    </button>
                    <button
                      onClick={() => {
                        const newSlides = [...currentSlides];
                        newSlides[index] =
                          (newSlides[index] + 1) % property.media.length;
                        setCurrentSlides(newSlides);
                      }}
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
                            const newSlides = [...currentSlides];
                            newSlides[index] = imgIndex;
                            setCurrentSlides(newSlides);
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
                        property.name
                        <span className="text-violet-500"> [2BHK]</span>
                      </h2>
                      <div className="flex items-center text-gray-400 mb-4">
                        <FaMapMarkerAlt className="mr-2 text-violet-500" />
                        <span>property.location</span>
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
      </div>
      <div className="flex items-center">
        <div className="absolute right-12 flex space-x-2">
          <button
            onClick={prevCardSlide}
            className="p-3 rounded-full bg-violet-500 shadow-lg hover:bg-violet-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-400"
            aria-label="Previous slide"
          >
            <FaArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextCardSlide}
            className="p-3 rounded-full bg-violet-500 shadow-lg hover:bg-violet-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-400"
            aria-label="Next slide"
          >
            <FaArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-2">
          {properties.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentCardIndex ? "bg-violet-500" : "bg-violet-200"
              }`}
              onClick={() => setCurrentCardIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <a href="/hostels" className="text-center my-8 text-violet-500 underline">
        View all Hostels
=======
      <div className="flex flex-col flex-wrap">
        <h2 className="text-3xl font-bold"> Property Featured</h2>
        <div className="flex flex-wrap justify-between my-2 w-full">
          <p className="text-gray-400 text-md font-thin w-1/2">
            Explore our handpicked selections of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            avilable through Estatein. Click &quot;
            <a href="/properties" className="text-white cursor-pointer">
              Views Details
            </a>
            &quot; for more information.
          </p>
          {/* {deviceWidth >= 600 && (
            <button className="text-white text-md font-thin p-2 bg-gray-600 rounded-md hover:bg-gray-500 h-1/2">
              Views All Properties
            </button>
          )} */}
        </div>
      </div>
      <div>
        <div
          className="relative w-full max-w-7xl mx-auto px-4 py-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          ref={sliderRef}
          role="region"
          aria-label="Real Estate Properties Carousel"
        >
          <div className="overflow-hidden relative rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="min-w-full"
                  role="group"
                  aria-roledescription="slide"
                >
                  <div className="mx-2">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02] duration-300">
                      <div className="relative h-64 sm:h-80">
                        <img
                          src={property.image}
                          alt={property.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                          <h2 className="text-white text-2xl font-bold mb-2">
                            {property.name}
                          </h2>
                          <p className="text-white text-lg">{property.price}</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 mb-4">
                          {property.location}
                        </p>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>{property.beds} Beds</span>
                          <span>{property.baths} Baths</span>
                          <span>{property.sqft} sqft</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-8 bottom-12 flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-violet-500 shadow-lg hover:bg-violet-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-400"
              aria-label="Previous slide"
            >
              <FaArrowLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-violet-500 shadow-lg hover:bg-violet-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-400"
              aria-label="Next slide"
            >
              <FaArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {properties.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-violet-500" : "bg-violet-200"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <a
        href="/property"
        className="text-center my-8 text-violet-500 underline"
      >
        View all Property
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
      </a>
    </section>
  );
}
