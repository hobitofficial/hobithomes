// import { useEffect, useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import QuestionCard from "../components/questions/QuestionCard";
import { Carousel } from "flowbite-react";

export default function Question() {
  return (
    <section className="flex flex-col flex-wrap bg-black text-white w-full h-full p-20">
      <div className="flex gap-1 items-center my-2">
        <RiStarSFill className="text-2xl text-orange-300" />
        <RiStarSFill className="text-xl text-orange-300" />
        <RiStarSFill className="text-md text-orange-300" />
      </div>
      <div className="flex flex-col flex-wrap">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="flex flex-wrap justify-between my-2 w-full">
          <p className="text-gray-400 text-md font-thin w-1/2">
            Find answer to common questions about Estatein&apos;s
            services,property lilsting and the real estate process. We&apos;re
            here to provide clarity and assist you every step of the way.
          </p>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="max-h-screen m-auto">
          <Carousel
            leftControl=" "
            rightControl=" "
            pauseOnHover
            slideInterval={3000}
            className="m-auto max-w-6xl pb-4"
          >
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
          </Carousel>
        </div>

        <a
          href="/questions"
          className="text-center my-2 text-violet-500 underline"
        >
          View all Questions
        </a>
      </div>
    </section>
  );
}
