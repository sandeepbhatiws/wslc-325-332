import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";
import './index.css'
import Home from "./Components/Home";
import CategoryFilter from "./Components/CategoryFilter";
import AboutUs from "./Components/AboutUs";
import RootLayout from "./Components/RootLayout";
import ProductDetails from "./Components/ProductDetails";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    {/* <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/products" element={ <CategoryFilter/> } />
      <Route path="/about-us" element={ <AboutUs/> } />
    </Routes> */}

    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<CategoryFilter />} />
        <Route path="/product-details/:productId" element={<ProductDetails />} />
      </Route>

      <Route path="/about-us" element={ <AboutUs/> } />


      <Route path="category" element={<RootLayout />}>
        <Route path="add" element={<Home />} />
        <Route path="view" element={<CategoryFilter />} />
      </Route>
    </Routes>
  </BrowserRouter>
);