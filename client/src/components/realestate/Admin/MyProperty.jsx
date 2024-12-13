import ReactReadMoreReadLess from "react-read-more-read-less";
<<<<<<< HEAD
import {
  FaSearch,
  FaArrowLeft,
  FaArrowRight,
  FaPlay,
  FaPause,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCurrentProperty } from "../../../redux/property/propertySlice.js";

export default function MyProperty() {
  const { currentUser } = useSelector((state) => state.user);

  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [properties, setProperties] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [playStates, setPlayStates] = useState([]);
  const [currentSlides, setCurrentSlides] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError(null);

      if (!currentUser?._id) {
        console.log("No user ID available");
        setLoading(false); // Set loading to false if no user ID
        return; // Exit if currentUser  is not defined
      }

      try {
        const res = await fetch(
          `http://localhost:8000/api/property/adminProperty/${currentUser._id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) {
          const errorMessage = await res.text(); // Get the error message from the response
          alert("Something went wrong while fetching your properties!");
          setError(
            errorMessage || "Something went wrong while showing properties!"
          );
          setLoading(false); // Set loading to false on error
          return;
        }

        const data = await res.json();
        console.log("Property data:", data);
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
  }, [currentUser]);

  useEffect(() => {
    setPlayStates(properties.map(() => true));
    setCurrentSlides(properties.map(() => 0));
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

    return () =>
      intervals.forEach((interval) => interval && clearInterval(interval));
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
=======
import { FaSearch } from "react-icons/fa";
import AddProperty from "../../properties/AddProperty";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function MyProperty() {
  // const myLongText =
  //   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sunt doloremque repudiandae, magnam mollitia quos deleniti distinctio laudantium pariatur harum molestias minus hic nemo illo, non tenetur porro. Ipsum quas, dolor sed numquam quo expedita! Non repellendus vero dolor? Animi blanditiis ex, perferendis quidem minus voluptate, maiores facilis nostrum nesciunt totam rem neque. Quod, eum, iste ipsa praesentium debitis quibusdam expedita tempora qui molestias nulla consequuntur, aut laudantium fugiat! Nam delectus consequuntur ad minus amet officia atque qui eum facere labore voluptatum possimus asperiores laborum placeat voluptas ipsam ratione odit corporis similique nobis laboriosam, doloribus neque eaque. At blanditiis eligendi illo consectetur vero aliquid esse ad assumenda sunt tempore obcaecati tempora mollitia error nisi, vel officiis distinctio necessitatibus cum debitis!";

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the function to fetch properties
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/property/allproperty", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch properties");
        }

        const data = await res.json();
        console.log("prop data", data);
        setProperties(data.properties); // Set the fetched properties
        setError(null); // Clear any previous errors
      } catch (err) {
        console.log(err.message);
        setError(err.message); // Set the error state
      } finally {
        setLoading(false); // Stop loading indicator
      }
    };

    // Call the fetch function inside useEffect
    fetchProperties();
  }, [properties, setProperties]); // Empty dependency array means this will run once on component mount

  // if (loading) return <p>Loading properties...</p>;
  // if (error) return <p>Error: {error}</p>;
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab

  const handleDelete = async (propertyId) => {
    const result = window.confirm(
      "Are you sure you want to delete this property?"
    );
<<<<<<< HEAD
    if (result) {
      try {
        const res = await fetch(`/api/property/deleteproperty/${propertyId}`, {
          method: "DELETE",
=======

    if (result) {
      try {
        const res = await fetch(`/api/property/deleteproperty/${propertyId}`, {
          method: "DELETE", // Specify the method
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.ok) {
          alert("Property deleted successfully!");
          // Optionally, you can update the state or refetch the properties here.
        } else {
          alert("Failed to delete property!");
        }
      } catch (error) {
        console.error(error.message);
        alert("Something went wrong while trying to delete the property!");
      }
    }
  };

<<<<<<< HEAD
  const handleUpdate = (id) => {
    const propertyToUpdate = properties.find((item) => item._id === id);
    if (!propertyToUpdate) {
      console.error("Property not found");
      return;
    }
    dispatch(updateCurrentProperty(propertyToUpdate));
    navigate("/updateProperty");
  };

  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;
  if (loading)
    return <div className="text-center text-white">Loading properties...</div>;
=======
  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Upcoming functionality!");
  };
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab

  return (
    <>
      <div>
        <div className="flex flex-wrap justify-around items-center my-8 space-y-4 max-w-7xl">
          <h1 className="text-2xl font-bold text-white w-full sm:w-auto">
            My Property
          </h1>
          <div className="flex items-center w-full sm:w-auto border border-gray-400 focus-within:border-violet-500 bg-black rounded-lg mx-4 px-2">
            <input
              type="text"
              placeholder="Search Property"
              className="w-full sm:w-auto p-2 bg-black text-white border-none focus:ring-0 focus:outline-none"
            />
            <span className="px-2">
              <FaSearch className="text-xl font-bold text-gray-400 hover:text-violet-500" />
            </span>
          </div>
          <a
            href="/addProperty"
            className="text-white bg-violet-500 p-2 rounded-lg shadow-lg"
          >
            Add Property
          </a>
        </div>
      </div>
<<<<<<< HEAD
      <div className="max-w-7xl">
        {properties.length === 0 ? (
          <div className="text-red-500">No properties available.</div>
        ) : (
          properties.map((property, index) => (
            <div key={property._id} className="mx-auto p-4 text-white my-8">
              <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative lg:w-1/2 h-[400px]">
                  <div className="relative w-full h-full">
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
                <div className="lg:w-1/2 p-6 flex flex-col justify-between bg-gray-800">
                  <div>
                    <h2 className="text-3xl font-bold mb-2 text-white">
                      {property.name}
                      <span className="text-violet-500 "> [2BHK]</span>
                    </h2>
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                      <div className="flex items-center gap-4 my-2 ">
                        <button
                          className="p-2 bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-600"
                          onClick={() => handleUpdate(property._id)}
                        >
                          Update
                        </button>
                        <button
                          className="p-2 bg-red-500 rounded-lg shadow-lg hover:bg-red-700"
                          onClick={() => handleDelete(property._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
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
=======
      {properties.map((prop) => (
        <div
          key={prop._id}
          className="bg-black border-2 border-gray-800 rounded-lg my-12 transition-transform transform hover:scale-105 duration-300 ease-in-out"
        >
          <div className="w-[70vw] flex border border-gray-700 rounded-lg bg-gray-900 overflow-hidden m-auto">
            <div className="relative">
              <img
                className="object-cover"
                src="https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2023/6/1/house-middleclass.jpg"
                alt="Property"
              />
              <span className="absolute top-2 right-2 bg-green-400 text-white text-sm px-2 py-1 rounded-full flex items-center gap-1">
                <FaCheckCircle />
                Verified
              </span>
            </div>
            <div className="text-white flex flex-col gap-4 w-full p-4">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <h2 className="text-2xl font-bold">{prop.name}</h2>
                <div className="flex items-center gap-4">
                  <button
                    className="p-2 bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-600"
                    onClick={() => handleUpdate(prop._id)}
                  >
                    Update
                  </button>
                  <button
                    className="p-2 bg-red-500 rounded-lg shadow-lg hover:bg-red-700"
                    onClick={() => handleDelete(prop._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500">{prop.type}</p>
              <p className="text-sm text-gray-500">{prop.location}</p>
              <div className="text-gray-400 text-sm">
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
                  {prop.description}
                </ReactReadMoreReadLess>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <p className="text-md font-semibold text-gray-500">
                    Price <br />
                    <span>
                      Rs.{" "}
                      <span className="line-through">{prop.pseudoprice}</span>
                    </span>
                  </p>
                  <p className="text-lg font-bold text-white">
                    Rs. <span>{prop.price}</span>
                  </p>
                </div>
                <button className="bg-transparent border border-violet-500 text-violet-500 py-2 px-6 rounded-md hover:bg-violet-500 hover:text-white transition">
                  Property Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
    </>
  );
}
