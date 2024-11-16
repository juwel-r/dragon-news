import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const {login} = useContext(AuthContext);
  const [error, setError] =useState('')
  const loginHandler =(e)=>{
    e.preventDefault();
    setError('')
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    login(email, pass)
    .then(result=>console.log(result.user))
    .catch(error=>setError(error.message))
  }
  return (
    <div className=" mx-auto flex items-center justify-center mt-10">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-8">
        <h1 className="text-3xl text-center font-bold">Login your account</h1>
        <form onSubmit={loginHandler} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            name="email"
              type="email"
              placeholder="email"
              className="input input-bordered rounded-none "
              required
            />
          </div>
          <div className="form-control">
            <input
            name="password"
              type="password"
              placeholder="password"
              className="input input-bordered rounded-none "
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="form-control mt-6">
            <button className="btn btn-primary btn-neutral rounded-none ">
              Login
            </button>
          </div>
        </form>
        <p>
          Dont’t Have An Account ?{" "}
          <Link className="text-red-500 font-bold" to="/auth/register">
            Register now.
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
