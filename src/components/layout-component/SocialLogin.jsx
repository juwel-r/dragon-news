import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
const SocialLogin = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold">Login With</h1>
        <div className="mt-6 space-y-2">
          <button className="btn btn-sm w-full btn-ghost border border-gray-500 flex items-center gap-2">
            <FaGoogle /> Login With Google
          </button>
          <button className="btn btn-sm w-full btn-ghost border border-gray-500 flex items-center gap-2">
            <FaTwitter /> Login With Twitter
          </button>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SocialLogin;
