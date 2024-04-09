"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

const page = () => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const allProducts = async () => {
      try {
        const res = await axios.get(
          `https://661439352fc47b4cf27beaf3.mockapi.io/api/v1/products/id`
        );

        return setProduct(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    allProducts();
  }, []);


  return <div></div>;
};

export default page;
