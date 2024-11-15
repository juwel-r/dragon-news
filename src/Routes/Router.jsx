import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import News from "../components/layout-component/News";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/category/01" replace={true}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/auth",
    element: <h1>Authentication</h1>,
  },
  {
    path: "/news",
    element: <h1>news element</h1>,
  },
  {
    path: "*",
    element: <h1>Page not found</h1>,
  },
]);
