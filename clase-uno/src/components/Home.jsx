import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen  ">
      <img
        className="w-full h-[90%] absolute object-cover "
        src="https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/gfuvmfczfyosqs1k4ema"
        alt=""
      />
      <div className="flex pt-20  justify-center h-[90%] items-center ">
        <div className="relative p-10 z-20 w-3/4 text-center">
          <h1 className="font-semibold text-3xl md:text-6xl text-gray-300  md:pt-20 uppercase">
            Inspiration for travel by real people
          </h1>
          <h2 className="text-white pt-5  uppercase">
            Book smart, travel simple
          </h2>
          <div className="relative flex justify-center h-12 mt-10">
            <Link to="/soon">
              <button className=" w-64 font-medium h-full bg-white  rounded-md">
                Start planning your trip
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
