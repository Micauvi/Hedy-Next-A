import React from "react";
import ProductDetail from "./page";

import { useRouter } from "next/router";
import NavBar from "@/app/components/NavBar";

const detail = () => {
  return (
    <div>
      <NavBar />
      <ProductDetail />
    </div>
  );
};

export default detail;
