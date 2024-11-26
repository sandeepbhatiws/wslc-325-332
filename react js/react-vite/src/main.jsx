import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Header from "./Components/Header";
// import Home from "./Components/Home";
import About from "./Components/About";

import './assets/css/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header/> */}
    {/* <Home/> */}
    <About/>
  </StrictMode>
);