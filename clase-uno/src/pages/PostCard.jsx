import React, { useEffect, useState } from "react";
import fakeData from "../fakeData.json";
import { Link } from "react-router-dom";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const PostCard = () => {
  const photos = useFetch();

  return (
    <div className="p-5 md:p-0 mt-10">
      <div className="flex w-full  gap-6 justify-center flex-wrap">
        {fakeData.posts.slice(0, 10).map((items, i) => (
          <div
            key={i}
            className="w-[500px] mb-10
          "
          >
            {photos[i] && (
              <div key={i}>
                <div className="relative">
                  <img
                    className=" w-full relative h-96 "
                    src={photos[i].urls.full}
                    alt={photos[i].alt_description}
                  />
                  <p
                    className="absolute top-7 bg-gray-600 text-white font-semibold bg-opacity-30 
              p-2 rounded-md text-sm uppercase left-10"
                  >
                    {photos[i].user.location}
                  </p>
                </div>
                <h3 className="text-2xl mt-5 h-20 font-semibold uppercase">
                  {photos[i].alt_description.split(" ").length > 7
                    ? photos[i].alt_description
                        .split(" ")
                        .slice(0, 6)
                        .join(" ") + "..."
                    : photos[i].alt_description}
                </h3>
                <div className="flex mt-4 justify-between pr-4 md:pr-0">
                  <div className="flex gap-3 ">
                    <img
                      className="w-8"
                      src={photos[i].user.profile_image.medium}
                      alt={items.username}
                    />
                    <p className="font-semibold  text-xl">
                      {photos[i].user.instagram_username}
                    </p>
                  </div>
                  <div className="md:flex gap-4 text-gray-500 text-lg">
                    <p>{items.publication_date}</p>
                    <p> {photos[i].likes} Likes</p>
                  </div>
                </div>
                <p className="mt-5 text-gray-600 text-lg">
                  {items.description}
                </p>
                <Link to={`/post/${i}`}>
                  <button className="border-b-[1px] text-xl font-semibold border-gray-800 mb-8  mt-5">
                    View Post
                  </button>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center my-28">
        <button className=" flex items-center justify-center w-60 h-14 border-[1px] border-gray-800 border-opacity-60 ">
          Load More
        </button>
      </div>
    </div>
  );
};

export default PostCard;
