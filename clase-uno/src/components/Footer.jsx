import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-gray-950 text-white h-20 flex z-0 justify-around items-center">
      <p className="flex">© Developed by Micaela Uvilla</p>
      <ul className="flex gap-5">
        <li>
          <Link to="https://www.linkedin.com/in/micaela-uvilla/">
            <FaLinkedin className="text-3xl" />
          </Link>
        </li>
        <li>
          <Link to="https://github.com/Micauvi">
            <FaGithub className="text-3xl" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
