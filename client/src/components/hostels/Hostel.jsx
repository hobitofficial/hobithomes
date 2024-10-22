import { Card } from "flowbite-react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { FaBath } from "react-icons/fa";
import { MdOutlineEmojiTransportation } from "react-icons/md";

export default function Hostel() {
  const myLongText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sunt doloremque repudiandae, magnam mollitia quos deleniti distinctio laudantium pariatur harum molestias minus hic nemo illo, non tenetur porro. Ipsum quas, dolor sed numquam quo expedita! Non repellendus vero dolor? Animi blanditiis ex, perferendis quidem minus voluptate, maiores facilis nostrum nesciunt totam rem neque. Quod, eum, iste ipsa praesentium debitis quibusdam expedita tempora qui molestias nulla consequuntur, aut laudantium fugiat! Nam delectus consequuntur ad minus amet officia atque qui eum facere labore voluptatum possimus asperiores laborum placeat voluptas ipsam ratione odit corporis similique nobis laboriosam, doloribus neque eaque. At blanditiis eligendi illo consectetur vero aliquid esse ad assumenda sunt tempore obcaecati tempora mollitia error nisi, vel officiis distinctio necessitatibus cum debitis!";

  return (
    <div className="bg-black p-8 border-2 border-gray-800 rounded-lg my-8">
      <Card
        className="max-w-md  border-gray-800 rounded-lg bg-black "
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2023/6/1/house-middleclass.jpg"
      >
        <div className="text-white flex flex-col gap-2  w-full mx-[-18px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Pakis Nest</h2>
            <div className="text-gray-400">
              <ReactReadMoreReadLess
                charLimit={100}
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
          </div>
          <div className="flex justify-between my-4">
            <span className=" flex items-center gap-1 text-md text-white border border-gray-800 rounded-xl bg-gray-900 p-2">
              <TbAirConditioningDisabled className="text-2xl text-violet-500" />
              AC rooms
            </span>
            <span className=" flex items-center gap-1 text-md text-white border border-gray-800 rounded-xl bg-gray-900 p-2">
              <FaBath className="text-2xl text-violet-500" />
              Well Furnished
            </span>
            <span className=" flex items-center gap-1 text-md text-white border border-gray-800 rounded-xl bg-gray-900 p-2">
              <MdOutlineEmojiTransportation className="text-2xl text-violet-500" />
              Transport
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-md font-bold text-gray-500">
                Price <br />
                <span>
                  Rs. <span className="line-through">1,59,999</span>
                </span>
              </p>
              <p>
                <span>
                  Rs. <span className="text-lg">1,57,999</span>
                </span>
              </p>
            </div>
            <button className="bg-transparent border border-violet-500 text-violet-500 py-2 px-6 rounded-md hover:bg-violet-500 hover:text-white transition">
              Property Details
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
