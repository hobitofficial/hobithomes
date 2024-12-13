// import { useEffect, useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import ReviewCard from "../components/reviews/ReviewCard";
import { Carousel } from "flowbite-react";

export default function UserReview() {
  // const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => setDeviceWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <section className="flex flex-col flex-wrap bg-black text-white w-full h-full p-20">
      <div className="flex gap-1 items-center my-2">
        <RiStarSFill className="text-2xl text-orange-300" />
        <RiStarSFill className="text-xl text-orange-300" />
        <RiStarSFill className="text-md text-orange-300" />
      </div>
      <div className="flex flex-col flex-wrap">
        <h2 className="text-3xl font-bold">What our user Says</h2>
        <div className="flex flex-wrap justify-between my-2 w-full">
          <p className="text-gray-400 text-md font-thin w-1/2">
            Read the success stories and heartfelt testimonials from our valued
            clients.Discover why they chose Estatein for their real estate need.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="max-h-screen m-auto">
          <Carousel
            leftControl=" "
            rightControl=" "
            pauseOnHover
            slideInterval={3000}
            className="m-auto max-w-6xl pb-4"
          >
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </Carousel>
        </div>

        <a
          href="/reviews"
          className="text-center my-2 text-violet-500 underline"
        >
          View all Reviews
        </a>
      </div>
    </section>
  );
}
