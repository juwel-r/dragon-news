import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const News = () => {
  // const articles = useLoaderData();
  // const { status, data } = articles;
  const params = useParams();
  const [articles, setArticles] = useState("");
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      .then((res) => res.json())
      .then((data) => setArticles(data.data));
  }, [params]);
  return (
    <div>
      <h1 className="text-xl font-semibold">Dragon News Home</h1>

      <div className="space-y-4 mt-8">
        {articles && articles.map((article) => (
          <NewsCard key={article._id} article={article}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default News;
