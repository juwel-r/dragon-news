import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { setUser, createUser } = useContext(AuthContext);
  const [error, setError] =useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    setError('')
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photoURL");
    const email = form.get("email");
    const password = form.get("password");
    createUser(email, password)
      .then((result) => setUser(result.user))
      .catch((error) => setError(error.message));
  };
  return (
    <div className=" mx-auto flex items-center justify-center mt-10">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-8">
        <h1 className="text-3xl text-center font-bold">Create your account</h1>
        <form onSubmit={submitHandler} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered rounded-none "
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photoURL"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered rounded-none "
              required
            />
          </div>

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
            <label className="label">
              <span className="label-text">Password</span>
            </label>
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
              Register
            </button>
          </div>
        </form>
        <p>
          Already Have An Account ?{" "}
          <Link className="text-red-500 font-bold" to="/auth/login">
            Login Now.
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
