"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const useAllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const allProducts = async () => {
      try {
        const res = await axios.get(
          "https://661439352fc47b4cf27beaf3.mockapi.io/api/v1/products"
        );

        return setProducts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    allProducts();
  }, []);
  return products;
};
export default useAllProducts;
