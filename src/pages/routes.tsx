import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "./homePage";
import Product from "./product";
import Products from "./products";

const router = createBrowserRouter([
  {
    path: "/starter_project",
    element: <Layout />,
    children: [
      {
        path: "/starter_project",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product",
        element: <Product />,
      },
    ],
  },
]);

export default router;
