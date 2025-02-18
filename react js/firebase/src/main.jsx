import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home.jsx';
import RootLayout from './Components/RootLayout.jsx';
import AddQuiz from './Components/AddQuiz.jsx';
import ViewQuiz from './Components/ViewQuiz.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Context from './ContextAPI/Context.jsx';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Context>
      <Routes>
        <Route element={ <RootLayout/> }>
          <Route path="/" element={<Home />} />
          <Route path="add-quiz" element={<AddQuiz />} />
          <Route path="view-quiz" element={<ViewQuiz />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Context>

  </BrowserRouter>
);