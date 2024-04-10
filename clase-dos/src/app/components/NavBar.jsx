"use client";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

import Link from "next/link";

const NavBar = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="flex gap-10 h-16 items-center justify-between px-6 ">
      <div onClick={goBack}>
        <FaArrowLeft className="text-2xl " />
      </div>
      <Link href="/">
        <h2 className="text-3xl font-bold">Home</h2>
      </Link>
      <FaShoppingCart className="text-2xl" />
    </div>
  );
};

export default NavBar;
