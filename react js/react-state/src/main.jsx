import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import Home from './Components/Home.jsx'
import ShowHide from './Components/ShowHide.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home/> */}

    <ShowHide/>
  </StrictMode>,
)
