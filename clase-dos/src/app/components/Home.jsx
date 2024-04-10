"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("main");

  useEffect(() => {
    const allDessert = async () => {
      try {
        const res = await axios.get(
          `https://661439352fc47b4cf27beaf3.mockapi.io/api/v1/products?search=${category}`
        );
        return setProducts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    allDessert();
  }, [category]);

  return (
    <div className="mt-2 md:px-20">
      <h1 className="hidden md:flex text-xl">
        Hello, this page is made for mobile first.
      </h1>
      <img
        className="h-56 md:hidden w-full object-cover rounded-2xl shadow-lg shadow-black"
        src="https://www.paulinacocina.net/wp-content/uploads/2022/06/comida-china-recetas.jpg"
        alt="food in a table"
      />
      <div className="mt-8 bg-sky-950 rounded-t-[3rem]">
        <div className="p-5 ">
          <ul className="flex md:justify-around justify-between text-xl text-white font-bold">
            <li className="w-24">
              <button
                className=" bg-sky-700 h-12 w-full p-1 rounded-xl"
                onClick={() => setCategory("drink")}
              >
                Drinks
              </button>
            </li>

            <li className="w-24 text-md space leading-4">
              <button
                className=" bg-sky-700 h-12 w-full p-1 rounded-xl"
                onClick={() => setCategory("main")}
              >
                Main Course
              </button>
            </li>

            <li className="w-24  ">
              <button
                onClick={() => setCategory("dessert")}
                className=" bg-sky-700 h-12 w-full  rounded-xl"
              >
                Desserts
              </button>
            </li>
          </ul>
        </div>
        <div className="md:flex ">
          {products.map((items, i) => (
            <div
              key={i}
              className=" flex justify-center  my-8  md:w-full md:flex-wrap "
            >
              <div className=" w-11/12  md:w-full  bg-white rounded-t-[3rem] ">
                <img
                  src={items.image}
                  alt={items.title}
                  className="object-cover  w-full h-52 md:h-96  rounded-t-[3rem]"
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
                    <Link href={`/detail/${items.id}`}>
                      <button className="bg-sky-950 text-white p-1">
                        know more
                      </button>
                    </Link>
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
