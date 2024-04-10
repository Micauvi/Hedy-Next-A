"use client";
import "../../src/app/globals.css";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { useRouter } from "next/router";
import { IoIosTimer } from "react-icons/io";
import useAllProducts from "@/app/hooks/useAllProducts";
import Link from "next/link";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const products = useAllProducts();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const allProducts = async () => {
      try {
        const res = await axios.get(
          `https://661439352fc47b4cf27beaf3.mockapi.io/api/v1/products/${id}`
        );

        return setProduct(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    allProducts();
  }, [id]);

  return (
    <div>
      <div className="md:flex md:items-center">
        <img className="rounded-3xl " src={product.image} alt={product.title} />
        <div className="p-4 ">
          <div className="flex justify-between mb-5">
            <h2 className="font-extrabold text-2xl">{product.title}</h2>
            <div className="flex gap-3">
              <IoIosTimer className="text-3xl" />
              <p className="text-xl">{product.time} min</p>
            </div>
          </div>
          <h4 className="text-xl mb-2">{product.description}</h4>{" "}
          <h4 className="text-xl">{product.details}</h4>
          <div className="flex justify-center items-center mt-5">
            <button className="bg-sky-950 text-white text-xl rounded-2xl p-1 w-2/3">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-5 md:justify-center md:gap-0 p-4">
        <div className="mt-16">
          <h3 className="text-2xl font-extrabold">Most Viewed dishes</h3>
          <div className="flex ">
            {products.slice(4, 7).map((image, index) => (
              <div key={index} className="flex md:ml-5 md:mr-5">
                <Link href={`/detail/${products.id}`}>
                  <img
                    className="w-32 h-44 object-cover  rounded-3xl"
                    src={image.image}
                    alt={`Slide ${index}`}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
