import { createBrowserRouter } from "react-router";
import ProductDetails from "./../pages/ProductDetails";
import App from "../pages/App";
import RootLayout from "../pages/RootLayout";
import About from "../pages/About";
import Product from "../pages/product";
import Cart from "./../pages/Cart";
import NotPage from "./../pages/NotPage";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    
    children: [
      { path: "/", index: true, element: <App /> },
      { path: "/home", index: true, element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Product /> },
      { path: "/cart", element: <Cart /> },
      { path: "/:id", element: <ProductDetails /> },
      { path: "/home/:id", element: <ProductDetails /> },
      { path: "/products/:id", element: <ProductDetails /> },
      {path: "*", element: <NotPage />},
    ],

    
  },
  
]);
