import propertyVideo from "../assets/landingimage/propertyvideo.mp4";

export default function Landing() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full py-8 px-6 lg:px-16 mt-24">
      {/* Left Section */}
      <div className="flex flex-col  gap-8 pr-4 lg:w-1/2 lg:-mt-8">
        <h1 className="text-3xl font-semibold text-white">
          Discover Your Dream Property with <br />
          <span className="text-violet-500 text-center">Hobit Homes</span>
        </h1>
        <p className="text-lg text-gray-400">
          Your journey to finding the perfect home begins here. Explore our
          listings to find the home that matches your dreams.
        </p>
        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="bg-violet-500 text-white py-2 px-6 rounded-md hover:bg-violet-600 transition">
            Learn More
          </button>
          <button className="bg-transparent border border-violet-500 text-violet-500 py-2 px-6 rounded-md hover:bg-violet-500 hover:text-white transition">
            Browse Properties
          </button>
        </div>
        {/* Stats */}
        <div className="flex gap-8 mt-6 w-full justify-around">
          <div className="flex flex-col items-center border py-2 px-4 border-gray-600">
            <h2 className="text-4xl font-bold text-violet-500">200+</h2>
            <p className="text-gray-400">Hotels</p>
          </div>
          <div className="flex flex-col items-center border py-2 px-4 border-gray-600">
            <h2 className="text-4xl font-bold text-violet-500">10k+</h2>
            <p className="text-gray-400">Properties for clients</p>
          </div>
          <div className="flex flex-col items-center border py-2 px-4 border-gray-600">
            <h2 className="text-4xl font-bold text-violet-500">5+</h2>
            <p className="text-gray-400">Types of Properties</p>
          </div>
        </div>
      </div>

      {/* Right Section - Image/Video */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        {/* Image for small screens */}
        <div className="lg:hidden">
          {/* <img
            src=""
            alt="Property"
            className="w-full rounded-lg shadow-md"
          /> */}
        </div>
        {/* Video for large screens */}
        <div className="hidden lg:block">
          <video
            src={propertyVideo}
            muted
            loop
            autoPlay
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
