import { parse } from "postcss";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
  const { article } = props || {};
  const { _id, author, title, thumbnail_url,image_url, details, rating, total_view } =
    article;

  return (
    <div className="max-w-lg bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="p-4">
        {/* Author Info */}
        <div className="flex items-center space-x-4">
          <img
            className="w-10 h-10 rounded-full"
            src={author.img} // Replace with profile image URL
            alt="Author"
          />
          <div>
            <h3 className="text-sm font-semibold text-gray-700">
              {author.name}
            </h3>
            <p className="text-xs text-gray-500">{author.published_date}</p>
          </div>
          <div className="flex justify-self-end">
            <CiBookmark />
            <CiShare2 />
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-lg font-semibold text-gray-800">{title}</h2>

        {/* Image */}
        <div className="mt-4">
          <img
            className="w-full h-48 object-cover rounded-md"
            src={image_url} // Replace with article image URL
            alt="News"
          />
        </div>

        <p className="news-details">{details.substring(0, 140)}...</p>
        <Link to={`/news/${_id}`}> <span className="text-green-500">Read More</span></Link>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t pt-3">
          {/* Rating */}
          <div className="flex items-center space-x-1">
            <div className="flex text-yellow-400">
              {[...Array(parseInt(rating.number))].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-500">{rating.number}</p>
          </div>

          {/* Views */}
          <div className="flex items-center space-x-1 text-sm text-gray-500">
<IoEye/>
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
