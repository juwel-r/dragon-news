import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import NewsCard from "../components/layout-component/NewsCard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path:'/category/:id',
        element: <NewsCard></NewsCard>,
      }
    ],
  },
  {
    path: '/auth',
    element: <h1>Authentication</h1>
  },
  {
    path: "/news",
    element: <h1>news element</h1>,
  },
  {
    path: '*',
    element: <h1>Page not found</h1>
  }
]);
