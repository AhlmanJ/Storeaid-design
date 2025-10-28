import React from 'react'
import './Button.css'
import { NavLink } from 'react-router-dom'

function Button() {
  return (
    <NavLink className="header-btn" to="/Booking" aria-label='"Book Now" button to go to the booking page.'><p>Book Now</p></NavLink>
  )
}

export default Button