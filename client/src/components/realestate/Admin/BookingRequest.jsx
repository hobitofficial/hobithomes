export default function BookingRequest() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap mt-12 jusitify-between w-[80vw] relative">
          <h1 className="text-2xl text-white font-semibold ">
            Booking Requests
          </h1>
          <select
            id="months"
            name="months"
            className="absolute right-0 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
          >
            <option
              value="january"
              className="bg-black text-white hover:bg-violet-300"
            >
              January
            </option>
            <option
              value="february"
              className="bg-black text-white hover:bg-violet-300"
            >
              February
            </option>
            <option
              value="march"
              className="bg-black text-white hover:bg-violet-300"
            >
              March
            </option>
            <option
              value="april"
              className="bg-black text-white hover:bg-violet-300"
            >
              April
            </option>
            <option
              value="may"
              className="bg-black text-white hover:bg-violet-300"
            >
              May
            </option>
            <option
              value="june"
              className="bg-black text-white hover:bg-violet-300"
            >
              June
            </option>
            <option
              value="july"
              className="bg-black text-white hover:bg-violet-300"
            >
              July
            </option>
            <option
              value="august"
              className="bg-black text-white hover:bg-violet-300"
            >
              August
            </option>
            <option
              value="september"
              className="bg-black text-white hover:bg-violet-300"
            >
              September
            </option>
            <option
              value="october"
              className="bg-black text-white hover:bg-violet-300"
            >
              October
            </option>
            <option
              value="november"
              className="bg-black text-white hover:bg-violet-300"
            >
              November
            </option>
            <option
              value="december"
              className="bg-black text-white hover:bg-violet-300"
            >
              December
            </option>
          </select>
        </div>
        <div className="overflow-x-auto overflow-y-auto  my-8 max-w-[80vw] h-[60vh]">
          <table className="w-full text-white">
            <thead className="bg-slate-600  ">
              <tr className="p-4">
                <th className="p-4">Guest</th>
                <th className="p-4  border-gray-800 ">Address</th>
                <th className="p-4  border-gray-800 ">Email</th>
                <th className="p-4  border-gray-800 ">Phone</th>
                <th className="p-4  border-gray-800 ">Email</th>
                <th className="p-4  border-gray-800 ">Property</th>
                <th className="p-4  border-gray-800 ">Date</th>
                <th className="p-4  border-gray-800 ">Time</th>
                <th className="p-4  border-gray-800 ">Amount</th>
                <th className="p-4  border-gray-800 ">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" p-4">Ashish</td>
                <td className="p-4 ">Noida </td>
                <td className="p-4 ">ashish@gmail.com</td>
                <td className="p-4 ">1234567890</td>
                <td className="p-4 ">john@doe.com</td>
                <td className="p-4 ">Flat</td>
                <td className="p-4 ">19/10/2024</td>
                <td className="p-4 ">3:53 PM</td>
                <td className="p-4 ">10000</td>
                <td className=" text-center bg-green-500 rounded-full cursor-pointer">
                  Conform
                </td>
              </tr>
              <tr>
                <td className="p-4 ">Ashish</td>
                <td className="p-4 ">Noida </td>
                <td className="p-4 ">ashish@gmail.com</td>
                <td className="p-4 ">1234567890</td>
                <td className="p-4 ">john@doe.com</td>
                <td className="p-4 ">Flat</td>
                <td className="p-4 ">19/10/2024</td>
                <td className="p-4 ">3:53 PM</td>
                <td className="p-4 ">10000</td>
                <td className="text-center bg-yellow-300 rounded-full cursor-pointer">
                  Pending
                </td>
              </tr>
              <tr>
                <td className="p-4 ">Ashish</td>
                <td className="p-4 ">Noida </td>
                <td className="p-4 ">ashish@gmail.com</td>
                <td className="p-4 ">1234567890</td>
                <td className="p-4 ">john@doe.com</td>
                <td className="p-4 ">Flat</td>
                <td className="p-4 ">19/10/2024</td>
                <td className="p-4 ">3:53 PM</td>
                <td className="p-4 ">10000</td>
                <td className=" text-center bg-red-500 rounded-full cursor-pointer">
                  Rejected
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
