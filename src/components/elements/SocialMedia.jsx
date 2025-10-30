import React from 'react'
import './SocialMedia.css'

function SocialMedia() {
  return (
    <div className='socialMedia-wrapper'>
        <a className='socialMedia-icon' href="https://facebook.com" target='_blank'><img id='socialMedia1' src="pictures/header/header_Icon1.svg" alt="Facebook logo" aria-label='Link to Facebook.' /></a>
        <a className='socialMedia-icon' href="https://x.com/" target='_blank'><img id='socialMedia2' src="pictures/header/header_Icon2.svg" alt="Twitter logo" aria-label='Link to X.'/></a>
        <a className='socialMedia-icon' href="https://www.instagram.com/" target='_blank'><img id='socialMedia3' src="pictures/header/header_Icon3.svg" alt="Instagram logo" aria-label='Link to Instagram.'/></a>
        <a className='socialMedia-icon' href="https://www.youtube.com/" target='_blank'><img id='socialMedia4' src="pictures/header/header_Icon4.svg" alt="YouTube logo" aria-label='Link to YouTube.'/></a>
    </div>
  )
}

export default SocialMedia