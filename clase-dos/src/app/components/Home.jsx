"use client";
import React from "react";
import useAllProducts from "../hooks/useAllProducts";
const Home = () => {
  const products = useAllProducts();

  return (
    <div className="mt-2">
      <img
        className="h-56 w-full object-cover rounded-2xl shadow-lg shadow-black"
        src="https://www.paulinacocina.net/wp-content/uploads/2022/06/comida-china-recetas.jpg"
        alt="food in a table"
      />
      <div className="mt-8 bg-sky-950 rounded-t-[3rem]">
        <div className="p-5 ">
          <ul className="flex justify-between text-xl text-white font-bold">
            <li className="w-24">
              <button className=" bg-sky-700 h-12 w-full p-1 rounded-xl">
                Starter
              </button>
            </li>

            <li className="w-24 text-md space leading-4">
              <button className=" bg-sky-700 h-12 w-full p-1 rounded-xl">
                Main Course
              </button>
            </li>

            <li className="w-24  ">
              <button className=" bg-sky-700 h-12 w-full  rounded-xl">
                Desserts
              </button>
            </li>
          </ul>
        </div>
        <div className="">
          {products.map((items, i) => (
            <div key={i} className=" flex justify-center my-8 ">
              <div className=" w-11/12 bg-white rounded-t-[3rem] ">
                <img
                  src={items.image}
                  alt={items.title}
                  className="object-cover w-full rounded-t-[3rem]"
                />
                <div className="p-1">
                  <h3 className="text-lg font-extrabold flex justify-center px-2">
                    {items.title}
                  </h3>
                  <div className="flex justify-around">
                    <p className="flex justify-center font-extrabold text-xl">
                      {" "}
                      ${items.price}
                    </p>
                    <button className="bg-sky-950 text-white p-1">
                      know more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
