import React from 'react'
import './DiscoverMore_Btn.css'
import { NavLink } from 'react-router-dom'

function DiscoverMore_Btn() {
  return (
    <div id='btn'><NavLink className="discover-btn" to="/Services" aria-label='"Discover more" button to go to the Services page.'><p>Discover More</p></NavLink></div>
  )
}

export default DiscoverMore_Btn