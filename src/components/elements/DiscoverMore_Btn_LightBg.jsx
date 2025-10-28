import React from 'react'
import './DiscoverMore_Btn_LightBg.css'
import { NavLink } from 'react-router-dom'

function DiscoverMore_Btn_LightBg() {
  return (
    <div id='btnLight'><NavLink className="discover-btn" to="/Services" aria-label='"Discover more" button to go to the Services page.'><p>Discover More</p></NavLink></div>
  )
}

export default DiscoverMore_Btn_LightBg