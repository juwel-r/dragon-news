import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="text-gray-600 text-lg space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex justify-evenly items-center gap-4">
        <p className="text-4xl">
          <FaUserAlt />
        </p>
        <button className="btn btn-neutral rounded-none text-xl px-6">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
