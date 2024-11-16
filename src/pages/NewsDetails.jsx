import React from "react";
import Navbar from "../components/Navbar";
import RightNavbar from "../components/layout-component/RightNavbar";
import Header from "../components/Header";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  return (
    <div className="mt-8 w-11/12 mx-auto mt-8">
      <header className="">
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 mt-8 gap-6">
        {/* Main news section */}
        <section className="col-span-9 mx-6">
          <div className="card bg-base-100 border border-gray-200 ">
            <figure className="p-6">
              <img
                src={news.image_url}
                alt={news.title}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body gap-4">
              <h2 className="card-title">{news.title}!</h2>
              <p>{news.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news.category_id}`}><button className="btn btn-primary">All news in this category</button></Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
