import { FaUserAlt } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="pt-24 flex flex-wrap gap-8 ">
      <div className="p-4 border bg-black rounded-lg shadow-lg">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <p className=" font-bold tracking-tight text-gray-400">
              Guests/Tenants
            </p>
            <h1 className="text-3xl text-violet-500 font-bold ">500</h1>
          </div>
          <span className="text-5xl  bg-blue-500 p-2 rounded-lg">
            <FaUserAlt />
          </span>
        </div>
      </div>
      <div className="p-4 border bg-black rounded-lg shadow-lg">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <p className=" font-bold tracking-tight text-gray-400">
              Guests/Tenants
            </p>
            <h1 className="text-3xl text-violet-500 font-bold ">500</h1>
          </div>
          <span className="text-5xl  bg-blue-500 p-2 rounded-lg">
            <FaUserAlt />
          </span>
        </div>
      </div>
      <div className="p-4 border bg-black rounded-lg shadow-lg">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <p className=" font-bold tracking-tight text-gray-400">
              Guests/Tenants
            </p>
            <h1 className="text-3xl text-violet-500 font-bold ">500</h1>
          </div>
          <span className="text-5xl  bg-blue-500 p-2 rounded-lg">
            <FaUserAlt />
          </span>
        </div>
      </div>
    </div>
  );
}
