"use client";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

import Link from "next/link";

const NavBar = () => {

  return (
    <div className="flex gap-10 h-16 items-center justify-around px-6 ">
      
      <Link href="/">
        <h2 className="text-3xl font-bold">Home</h2>
      </Link>
      <FaShoppingCart className="text-2xl" />
    </div>
  );
};

export default NavBar;
