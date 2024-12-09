import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";
import './index.css'
import Home from "./Components/Home";
import CategoryFilter from "./Components/CategoryFilter";
import AboutUs from "./Components/AboutUs";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/products" element={ <CategoryFilter/> } />
      <Route path="/about-us" element={ <AboutUs/> } />
    </Routes>
  </BrowserRouter>
);