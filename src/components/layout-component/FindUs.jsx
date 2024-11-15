import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold mt-7 mb-3">Find Us On</h1>
      <div>
        <button className="btn btn-ghost rounded-none border border-gray-300 w-full justify-start font-semibold border-b-0"><FaFacebook/> Facebook</button>
        <button className="btn btn-ghost rounded-none border border-gray-300 w-full justify-start font-semibold border-b-0"><FaInstagram/> Facebook</button>
        <button className="btn btn-ghost rounded-none border border-gray-300 w-full justify-start font-semibold border-b-0"><FaTwitter/> Facebook</button>
        <button className="btn btn-ghost rounded-none border border-gray-300 w-full justify-start font-semibold"><FaLinkedin/> Facebook</button>
      </div>
    </div>
  );
};

export default FindUs;
