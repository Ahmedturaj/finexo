import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import icon from "../../../assets/icons/Software development company in Dhaka BD.png";
import { IoPerson } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? " text-[#00bbf0] mr-4 hover:text-[#00bbf0]  p-2 rounded-md text-base"
              : "text-white hover:text-[#00bbf0] text-base"
          }
        >
          Home
        </NavLink>
      </li>
      {/*  */}
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? " text-[#00bbf0] mr-4 hover:text-[#00bbf0]  p-2 rounded-md text-base"
              : "text-white hover:text-[#00bbf0] text-base"
          }
        >
          About
        </NavLink>
      </li>
      {/*  */}
      <li>
        <NavLink
          to={"/services"}
          className={({ isActive }) =>
            isActive
              ? " text-[#00bbf0] mr-4 hover:text-[#00bbf0]  p-2 rounded-md text-base"
              : "text-white hover:text-[#00bbf0] text-base"
          }
        >
          Services
        </NavLink>
      </li>
      {/*  */}
      <li>
        <NavLink
          to={"/whyUs"}
          className={({ isActive }) =>
            isActive
              ? " text-[#00bbf0] mr-4 hover:text-[#00bbf0]  p-2 rounded-md text-base"
              : "text-white hover:text-[#00bbf0] text-base"
          }
        >
          Why us
        </NavLink>
      </li>
      {/*  */}
      <li>
        <NavLink
          to={"/team"}
          className={({ isActive }) =>
            isActive
              ? " text-[#00bbf0] mr-4 hover:text-[#00bbf0]  p-2 rounded-md text-base"
              : "text-white hover:text-[#00bbf0] text-base"
          }
        >
          Team
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/LogIn"}
          className="text-white flex items-center justify-center hover:text-[#00bbf0] text-base"
        >
          <IoPerson /> Login
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-transparent first_color  text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black  bg-opacity-50 rounded-box z-[30] mt-3 w-52 p-2 shadow uppercase"
          >
            {navLink}
            <a className=" px-3">
              <FaSearch />
            </a>
          </ul>
        </div>
        <a className="btn btn-ghost ">
          <img src={icon} className="w-36" alt="" />
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-2 uppercase">{navLink}</ul>
        <a className=" px-3 text-blue-50">
          <FaSearch />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
