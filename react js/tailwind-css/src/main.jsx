import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/Home.jsx'
import CategoryFilter from './Components/CategoryFilter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home/> */}
    <CategoryFilter/>
  </StrictMode>,
)
