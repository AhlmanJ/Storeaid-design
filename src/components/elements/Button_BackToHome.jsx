import React from 'react'
import { NavLink } from 'react-router-dom'
import './Button_BackToHome.css'

function Button_BackToHome() {
  return (
    <NavLink className="backHome-btn" to="/" aria-label='"Back To Home" button to go to the Home-page.'><p>Back To Home</p></NavLink>
  )
}

export default Button_BackToHome