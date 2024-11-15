import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const NewsCard = () => {
const [news , setNews] =useState([])
const param = useParams()

useEffect(()=>{
    fetch(`https://openapi.programming-hero.com/api/news/category/${param.id}`)
    .then(res => res.json())
    .then(data => setNews(data.data))
},[param])
console.log(news, param.id)
    return (
        <div>
            total news {news.length}
        </div>
    );
};

export default NewsCard;