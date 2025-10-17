import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import Booking from './pages/Booking'
import NotFound from './pages/NotFound'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <div className='wrapper'>
  

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs/>} />  
        <Route path="/Services" element={<Services/>} /> 
        <Route path="/ContactUs" element={<ContactUs/>} /> 
        <Route path="/Booking" element={<Booking/>} /> 
        <Route path="*" element={<NotFound/>} />
      </Routes>

     
    </div>
    </BrowserRouter>
  </StrictMode>,
)
