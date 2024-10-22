import ReactReadMoreReadLess from "react-read-more-read-less";
// import { TbAirConditioningDisabled } from "react-icons/tb";
// import { FaBath } from "react-icons/fa";
// import { MdOutlineEmojiTransportation } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";

export default function Hostel() {
  const myLongText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sunt doloremque repudiandae, magnam mollitia quos deleniti distinctio laudantium pariatur harum molestias minus hic nemo illo, non tenetur porro. Ipsum quas, dolor sed numquam quo expedita! Non repellendus vero dolor? Animi blanditiis ex, perferendis quidem minus voluptate, maiores facilis nostrum nesciunt totam rem neque. Quod, eum, iste ipsa praesentium debitis quibusdam expedita tempora qui molestias nulla consequuntur, aut laudantium fugiat! Nam delectus consequuntur ad minus amet officia atque qui eum facere labore voluptatum possimus asperiores laborum placeat voluptas ipsam ratione odit corporis similique nobis laboriosam, doloribus neque eaque. At blanditiis eligendi illo consectetur vero aliquid esse ad assumenda sunt tempore obcaecati tempora mollitia error nisi, vel officiis distinctio necessitatibus cum debitis!";

  return (
    <div className="w-[70vw]  flex border border-gray-700 rounded-lg bg-gray-900 overflow-hidden mt-24 m-auto">
      <div className="relative">
        <img
          className=" object-cover"
          src="https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2023/6/1/house-middleclass.jpg"
          alt="Property"
        />

        <span className="absolute top-2 right-2 bg-green-400 text-white text-sm px-2 py-1 rounded-full flex items-center gap-1">
          <FaCheckCircle />
          Verified
        </span>
      </div>
      <div className="text-white flex flex-col gap-4 w-full p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Pakis Nest</h2>
          <span>
            <CiHeart className="text-2xl text-gray-400 hover:text-gray-200 hover:text-3xl cursor-pointer" />
          </span>
        </div>
        <p className=" flex items-center text-sm text-gray-300">
          Room Type:
          <span className="text-lg px-2">
            {" "}
            Single Bed, Double Bed, Triple Bed
          </span>
        </p>
        <p className="text-sm text-gray-500">1234 Street, City, Country</p>
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
            {myLongText}
          </ReactReadMoreReadLess>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <p className="text-md font-semibold text-gray-500">
              Price <br />
              <span>
                Rs. <span className="line-through">1,59,999/Year</span>
              </span>
            </p>
            <p className="text-lg font-bold text-white">
              Rs.{" "}
              <span>
                1,57,999/ <span className="text-violet-400">Year</span>{" "}
              </span>
            </p>
          </div>
          <button className="bg-transparent border border-violet-500 text-violet-500 py-2 px-6 rounded-md hover:bg-violet-500 hover:text-white transition">
            Property Details
          </button>
        </div>
      </div>
    </div>
  );
}
