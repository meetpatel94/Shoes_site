import React from "react";
import img1 from "./Photos/favicon.png";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
import { TbStack2 } from "react-icons/tb";
import { createBrowserRouter, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container flex py-5 px-12 items-center justify-between">
        <div className="logo font-serif font-bold text-black text-4xl">
          <a href="/">
            <TbStack2 />
          </a>
        </div>
        <ul className="flex items-center gap-7">
          <li className="hover:underline cursor-pointer">
            <Link to="/men">Men</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link to="/women">Women</Link>
          </li>
        </ul>
        <ul className="list-none flex items-center justify-center gap-3">
          <li className="font-extrabold text-2xl text-black cursor-pointer">
            <IoIosSearch />
          </li>
          <li className="font-extrabold text-2xl text-black cursor-pointer">
            <HiOutlineShoppingBag />
          </li>
          <li className="font-extrabold text-2xl text-black cursor-pointer">
            <FaRegUser />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
