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
      prevIndex === properties.length - 1 ? 0 : prevIndex + 1
    );
  }, [properties.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? properties.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let intervalId;
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
      <div className="flex gap-1 items-center my-2">
        <RiStarSFill className="text-2xl text-orange-300" />
        <RiStarSFill className="text-xl text-orange-300" />
        <RiStarSFill className="text-md text-orange-300" />
      </div>
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
      </a>
    </section>
  );
}
