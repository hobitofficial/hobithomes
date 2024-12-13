import { Avatar, Blockquote, Rating } from "flowbite-react";

export default function ReviewCard() {
  return (
    <figure className="max-w-6xl border border-gray-800 rounded-lg p-8 my-8">
      <div className="mb-4 flex items-center">
        <Rating size="md">
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
        </Rating>
      </div>
      <Blockquote>
        <h2 className="text-white font-bold text-2xl my-2">
          Exceptional Services!
        </h2>
        <p className="text-xl text-gray-400 font-thin flex flex-wrap">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          illum praesentium esse maxime tempora maiores odio culpa voluptatem
          blanditiis. Vero!
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex items-center space-x-3">
        <Avatar
          rounded
          size="md"
          img="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt=""
        />
        <div className="flex flex-col items-center  ">
          <cite className="pr-3 font-medium text-white ">Bonnie Green</cite>
          <cite className="pl-3 text-sm text-gray-400 ">India, Noida</cite>
        </div>
      </figcaption>
    </figure>
  );
}
