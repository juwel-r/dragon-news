import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex justify-start items-center gap-4 bg-base-200 font-bold text-lg p-2 ">
      <button className="text-white px-4 py-3 bg-[#D72050] h-full">Latest</button>

      <Marquee pauseOnHover={true}>
        <Link to="/news">
          <p>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
