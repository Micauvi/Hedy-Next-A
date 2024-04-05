import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import fakeData from "../fakeData.json";
import useFetch from "../hooks/useFetch";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";

const PostDetail = () => {
  const { id } = useParams();
  const post = fakeData.posts[id];
  const photos = useFetch();

  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="  ">
      <div className="md:flex md:justify-content ">
        {photos[id] && (
          <div className="flex md:gap-44">
            <div className="md:w-[65%]">
              <div className="md:py-10 ml-5 pt-5 md:ml-32 flex gap-5">
                <Link to="/">
                  <p>Home </p>
                </Link>
                <p>/</p>

                <p> {photos[id].user.instagram_username}</p>
              </div>
              <div className="h-screen p-5 md:mt-26 md:ml-32 relative">
                <img
                  className=" md:h-3/4 w-full h-full object-cover"
                  src={photos[id].urls.full}
                  alt={photos[id].alt_description}
                />
                <div className="flex justify-center items-center gap-5 mt-5 cursor-pointer">
                  <div
                    className="flex gap-5 items-center"
                    onClick={handleLikeClick}
                  >
                    {liked ? <FaHeart color="red" /> : <FaRegHeart />}
                    <p> Like</p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <GoShareAndroid />
                    <p>Share</p>
                  </div>
                </div>
                <h1 className="text-white font-bold w-3/4 text-4xl md:text-5xl absolute uppercase left-10 top-[30%] md:top-[40%]">
                  {photos[id].alt_description.split(" ").length > 6
                    ? photos[id].alt_description
                        .split(" ")
                        .slice(0, 6)
                        .join(" ") + "..."
                    : photos[id].alt_description}
                </h1>

                <p className="absolute font-bold text-xl top-[70%] md:top-[60%] text-white left-10  ">
                  by {photos[id].user.instagram_username} -- {photos[id].likes}{" "}
                  Likes -- {post.shares_count} Shares
                </p>
              </div>
            </div>
            <div className="md:mt-44 lg:ml-20 hidden lg:block">
              {fakeData.posts.slice(2, 6).map((items, i) => (
                <div
                  key={i}
                  className="flex gap-10 items-center border-b-[1px] border-gray-400 p-2 pb-4 "
                >
                  <img
                    className="rounded-full mt-8 w-20 h-20"
                    src={items.image}
                    alt={items.title}
                  />
                  <Link to={`/${i}`}>
                    <h3 className="flex items-center font-semibold text-xl w-48 uppercase">
                      {photos[i].alt_description.split(" ").length > 5
                        ? photos[i].alt_description
                            .split(" ")
                            .slice(0, 5)
                            .join(" ") + "..."
                        : photos[i].alt_description}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center p-5 text-center md:text-start md:p-0">
        <h3 className="text-5xl mb-10 w-3/4 font-bold uppercase text-center">
          {photos[id]?.alt_description}
        </h3>
        <div className="md:w-3/4 font-medium text-lg space-y-10 mb-20">
          <p>
            Adipisicing elit. Suscipit nesciunt nobis ullam ut doloribus
            dignissimos autem accusamus non corrupti maxime dolores fugit,
            facilis debitis voluptas delectus amet similique. Nisi, nulla.
            Blanditiis cumque, reiciendis rem numquam quasi facere maxime eos
            totam ducimus quas odio unde excepturi corporis a dolore omnis
            offici
          </p>
          <p>
            Amet consectetur adipisicing elit. Est nam, iusto odit excepturi
            dolores suscipit, iste eligendi delectus dignissimos porro quas et
            fuga explicabo maxime velit? Aliquam dolores provident quisquam.
            Quia, iusto odio! Natus eos voluptate similique esse, ex, placeat
            minus dolor architecto distinctio provident alias repudiandae,
            voluptatibus tempore accusamus nesciunt et laboriosam? Aut, minima
            sit! Molestiae, corporis. Omnis, molestias.
          </p>
          <h4 className="font-bold text-4xl md:p-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cum
            quibusdam facere.
          </h4>
          <p>
            Sit amet consectetur adipisicing elit. Ipsum maxime atque adipisci
            vero pariatur voluptatem, praesentium alias numquam ratione magnam
            possimus est reprehenderit, quam cupiditate in eum ipsa cum a!
            Accusantium magnam saepe ullam eius obcaecati a praesentium aliquid.
            Magni sapiente, accusantium ut repudiandae optio, nihil, maxime non
            ratione odio esse consequatur alias porro cum ipsa eum temporibus .
          </p>
          <p>
            Consectetur adipisicing elit. Possimus soluta accusantium
            necessitatibus fuga, adipisci sapiente neque saepe a architecto
            perferendis, reprehenderit voluptate nesciunt pariatur provident
            similique sequi voluptatum. Dicta, necessitatibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
