import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

import { GoListUnordered, GoX } from "react-icons/go";
import { FiX } from "react-icons/fi";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="w-full h-[10vh] px-10 bg-gray-900 ">
      <div className="w-full h-full flex items-center justify-between md:justify-around">
        <Link to="/">
          <h3 className="text-white uppercase font-bold text-xl md:text-4xl  ">
            Diversenet
          </h3>
        </Link>
        <div className="hidden sm:block">
          <div className="flex text-text-1 gap-10 items-center text-white">
            <Link to="/posts">
              <p className="text-2xl">All Posts</p>
            </Link>
            <Link to="/addPost">
              <button className="bg-gray-500 rounded-xl text-xl w-36 h-10 mb-5 md:m-0">
                + Add Post
              </button>
            </Link>
            <input
              className="h-10 px-4 rounded-md text-black"
              placeholder="Search..."
              type="text"
            />
          </div>
        </div>
        <div className="sm:hidden">
          <button
            onClick={handleMenu}
            className="text-xl text-white focus:outline-none"
          >
            {open ? <FiMenu /> : <GoListUnordered />}
          </button>
        </div>
      </div>
      {open && (
        <div
          className="h-full w-full bg-black bg-opacity-50 md:bg-opacity-0 fixed top-0 left-0 transition-opacity duration-300 z-40"
          onClick={handleMenu}
        ></div>
      )}
      <div
        className={`h-full w-60 bg-white fixed top-0 right-0 transition-transform duration-300 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } z-50 sm:hidden`}
      >
        <FiX className="text-3xl absolute top-0 right-0" onClick={handleMenu} />
        <div className="md:flex items-center md:gap-5  mt-2 md:mt-0 p-5 space-y-5">
          <Link to="/posts">
            <p className="text-lg mb-4">All Posts</p>
          </Link>
          <Link to="/addPost">
            <button className="bg-gray-500 text-white rounded-xl w-36 text-lg h-10 mb-5 md:m-0">
              + Add Post
            </button>
          </Link>
          <input
            className="h-10 px-4 mr-16 w-full rounded-md border-gray-400 border-[1px] "
            placeholder="Search..."
            type="text"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
