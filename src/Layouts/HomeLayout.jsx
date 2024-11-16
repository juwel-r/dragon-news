import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import CategoryNavbar from "../components/layout-component/CategoryNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";
import NewsCard from "../components/layout-component/NewsCard";
import News from "../components/layout-component/News";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto my-6">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto grid md:grid-cols-4 mt-10 gap-4">
        <aside className="col-span-1">
          <CategoryNavbar></CategoryNavbar>
        </aside>
        <section className="col-span-2">
          <Outlet />
        </section>
        <aside className="col-span-1">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
