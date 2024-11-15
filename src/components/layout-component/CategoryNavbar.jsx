import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CategoryNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    <h1 className="text-xl font-semibold">All Category</h1>;
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <h1 className="text-xl font-semibold">All Category ({categories.length})</h1>
<ul className="flex flex-col items-start mt-5">
  {
    categories.map(category=><NavLink key={category.category_id} to={`category/${category.category_id}`}>
      <li className="btn btn-ghost rounded-none text-xl text-gray-500 h-full w-full justify-start" >{category.category_name}</li>
    </NavLink>)
  }
</ul>
    </div>
  );
};

export default CategoryNavbar;
