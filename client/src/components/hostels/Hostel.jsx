import ReactReadMoreReadLess from "react-read-more-read-less";
import { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaPlay,
  FaPause,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import Searchterm from "../searchbar/Searchterm";
import LongtermHostelFilter from "../searchbar/LongtermHostelFilter";
import ShortTermSearch from "../searchbar/ShortTermSearch";
import ShorttermFilter from "../searchbar/ShorttermFilter";
import LongtermSearch from "../searchbar/LongtermSearch";

export default function Hostel() {
  const { stayDuration } = useSelector((state) => state.searchs);

  const { hostels } = useSelector((state) => state.hostels);
  const [currentHostelIndex, setCurrentHostelIndex] = useState(0);
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
      prev === hostels[currentHostelIndex].images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? hostels[currentHostelIndex].images.length - 1 : prev - 1
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
                <LongtermHostelFilter />
              </span>
            </div>
          )}
        </div>

        {hostels.length === 0 ? (
          <div className="text-red-500">No properties available.</div>
        ) : (
          hostels.map((hostel, index) => (
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
                    {hostel.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`absolute w-full h-full transition-opacity duration-500 ${
                          currentSlide === imgIndex
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
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
                    </button>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 p-2 rounded-full transition-colors"
                    aria-label="Previous image"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 p-2 rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    <FaArrowRight />
                  </button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {hostel.images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => setCurrentSlide(imgIndex)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentSlide === imgIndex
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
                      {hostel.name}{" "}
                      <span className="text-violet-500"> [1 BED]</span>
                    </h2>
                    <div className="flex items-center text-gray-400 mb-4">
                      <FaMapMarkerAlt className="mr-2 text-violet-500" />
                      <span>{hostel.location}</span>
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
                        {hostel.description}
                      </ReactReadMoreReadLess>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <p className="text-md font-semibold text-gray-500">
                        Price <br />
                        <span>
                          Rs.{" "}
                          <span className="line-through">
                            {hostel.pseudoPrice}
                          </span>
                        </span>
                      </p>
                      <p className="text-lg font-bold text-white">
                        Rs. <span>{hostel.price}</span>
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
