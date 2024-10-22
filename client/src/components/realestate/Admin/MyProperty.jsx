import ReactReadMoreReadLess from "react-read-more-read-less";
import { FaSearch } from "react-icons/fa";
import AddProperty from "../../properties/AddProperty";
import { FaCheckCircle } from "react-icons/fa";

export default function MyProperty() {
  const myLongText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sunt doloremque repudiandae, magnam mollitia quos deleniti distinctio laudantium pariatur harum molestias minus hic nemo illo, non tenetur porro. Ipsum quas, dolor sed numquam quo expedita! Non repellendus vero dolor? Animi blanditiis ex, perferendis quidem minus voluptate, maiores facilis nostrum nesciunt totam rem neque. Quod, eum, iste ipsa praesentium debitis quibusdam expedita tempora qui molestias nulla consequuntur, aut laudantium fugiat! Nam delectus consequuntur ad minus amet officia atque qui eum facere labore voluptatum possimus asperiores laborum placeat voluptas ipsam ratione odit corporis similique nobis laboriosam, doloribus neque eaque. At blanditiis eligendi illo consectetur vero aliquid esse ad assumenda sunt tempore obcaecati tempora mollitia error nisi, vel officiis distinctio necessitatibus cum debitis!";

  return (
    <>
      <div>
        <div className="w-full flex flex-wrap justify-between items-center my-8 space-y-4">
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

          <AddProperty className="w-full sm:w-auto" />
        </div>
      </div>
      <div className="bg-black p-8 border-2 border-gray-800 rounded-lg my-8">
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
              <h2 className="text-2xl font-bold">Shivam House</h2>
            </div>
            <p className="text-sm text-gray-500">Apartment | 3BHK</p>
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
                    Rs. <span className="line-through">15,000</span>
                  </span>
                </p>
                <p className="text-lg font-bold text-white">
                  Rs. <span>12,000</span>
                </p>
              </div>
              <button className="bg-transparent border border-violet-500 text-violet-500 py-2 px-6 rounded-md hover:bg-violet-500 hover:text-white transition">
                Property Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
