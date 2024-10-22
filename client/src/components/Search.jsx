import { CiLocationOn } from "react-icons/ci";
import { FaRegBuilding } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoCube } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";

export default function Search() {
  return (
    <>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        <div className="flex items-center bg-gray-700 rounded-lg px-2 shadow-lg focus-within:ring-2 focus-within:ring-violet-500">
          <CiLocationOn className="text-gray-400 text-2xl pl-2" />
          <input
            type="text"
            placeholder="Location"
            className="w-full  bg-transparent text-gray-300 placeholder-gray-400 px-2 py-4 border-none focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex items-center bg-gray-700 rounded-lg px-2 shadow-lg focus-within:ring-2 focus-within:ring-violet-500">
          <FaRegBuilding className="text-gray-400 text-2xl pl-2" />

          <input
            type="text"
            placeholder="Property Type"
            className="w-full bg-transparent text-gray-300 placeholder-gray-400 px-2 py-4 border-none focus:outline-none focus:ring-0"
          />
        </div>
        <div className="flex items-center bg-gray-700 rounded-lg px-2 shadow-lg focus-within:ring-2 focus-within:ring-violet-500">
          <RiMoneyRupeeCircleFill className="text-gray-400 text-2xl pl-2" />

          <input
            type="text"
            placeholder="Pricing Range"
            className="w-full bg-transparent text-gray-300 placeholder-gray-400 px-2 py-4 border-none focus:outline-none focus:ring-0"
          />
        </div>
        <div className="flex items-center bg-gray-700 rounded-lg px-2 shadow-lg focus-within:ring-2 focus-within:ring-violet-500">
          <IoCube className="text-gray-400 text-2xl pl-2" />

          <input
            type="text"
            placeholder="Property Size"
            className="w-full bg-transparent text-gray-300 placeholder-gray-400 px-2 py-4 border-none focus:outline-none focus:ring-0"
          />
        </div>
        <div className="flex items-center bg-gray-700 rounded-lg px-2 shadow-lg focus-within:ring-2 focus-within:ring-violet-500">
          <IoIosTime className="text-gray-400 text-2xl pl-2" />

          <input
            type="text"
            placeholder="Build Year"
            className="w-full bg-transparent text-gray-300 placeholder-gray-400 px-2 py-4 border-none focus:outline-none focus:ring-0"
          />
        </div>
      </div>
    </>
  );
}
