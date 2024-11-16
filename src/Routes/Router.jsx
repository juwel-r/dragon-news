import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import News from "../components/layout-component/News";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
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
    element: <AuthLayout/>,
    children:[
      {
        path: '/auth/login',
        element:<Login></Login>
      },
      {
        path: '/auth/register',
        element:<Register></Register>
      }
    ]
  },
  {
    path: "/news/:id",
    element: <NewsDetails></NewsDetails>,
    loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path: "*",
    element: <h1>Page not found</h1>,
  },
]);
