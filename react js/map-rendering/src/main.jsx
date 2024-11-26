import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import FaqSection from './Components/FaqSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FaqSection/>
  </StrictMode>,
)
