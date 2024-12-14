import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home.jsx';
import RootLayout from './Components/RootLayout.jsx';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>

    <Routes>
      <Route element={ <RootLayout/> }>
        <Route path="/" element={<Home />} />
      </Route>
      
    </Routes>

  </BrowserRouter>
);