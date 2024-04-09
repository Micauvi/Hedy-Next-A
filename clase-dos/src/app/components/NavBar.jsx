import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex gap-10 h-16 items-center justify-between px-6 ">
      <FaArrowLeft className="text-2xl " />
      <h2 className="text-3xl font-bold">Menu</h2>
      <FaShoppingCart className="text-2xl" />
    </div>
  );
};

export default NavBar;
