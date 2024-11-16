import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="grid grid-cols-3">
      {/* <div></div>//dont remove this div */}
      <div className="text-xl font-bold texts">Hello! {user && user.email}</div>
      <div className="text-gray-600 text-lg space-x-4 justify-self-center self-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex justify-evenly items-center gap-4 justify-self-end self-center">
        <p className="text-4xl">
          <FaUserAlt />
        </p>
        {user ? (
          <button className="btn btn-neutral rounded-none text-xl px-6" onClick={logOut}>Logout</button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-neutral rounded-none text-xl px-6"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
