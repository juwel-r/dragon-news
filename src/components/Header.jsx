import React from "react";
import logo from '../assets/logo.png'
import moment from "moment";

const Header = () => {
  return (
    <div className="w-full text-center mx-auto mt-6 px-4">
      <div><img className="mx-auto" src={logo} alt="" /></div>
      <p className="text-gray-500">Journalism Without Fear or Favour</p>
      <p>
        {moment().format('dddd, MMMM D, YYYY')}
      </p>
    </div>
  );
};

export default Header;
