import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "./homePage";
import Product from "./product";
import Products from "./products";

const router = createBrowserRouter([
  {
    path: "/sneakers-product-page/starter_project",
    element: <Layout />,
    children: [
      {
        path: "",
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
