import React from 'react'
import Button from '../../elements/Button'
import './Header.css'

function Header() {
  return (
    <header>
        <div className="container">
            <div className="contactInfo-bar">
                <div className='left-content'>
                    <img src="pictures/header/phone_Icon.svg" alt="An icon that looks like a phone" />
                    <a className='header-link' href="*" aria-label='Link to contact the company by phone.'><p id='nr-text'>+46 8 123 122 44</p></a>
                    <img id='mail-icon' src="pictures/header/mail_Icon.svg" alt="An icon that looks like a letter" />
                    <a className='header-link' href="*" aria-label='Link to contact the company via email.'><p id='mail-text'>contact@domain.com</p></a>
                </div>
                <div className='right-content'>
                    <a className='socialMedia-icon' href="https://facebook.com" target='_blank'><img id='socialMedia1' src="pictures/header/header_Icon1.svg" alt="Facebook logo" aria-label='Link to Facebook.' /></a>
                    <a className='socialMedia-icon' href="https://x.com/" target='_blank'><img id='socialMedia2' src="pictures/header/header_Icon2.svg" alt="Twitter logo" aria-label='Link to X.'/></a>
                    <a className='socialMedia-icon' href="https://www.instagram.com/" target='_blank'><img id='socialMedia3' src="pictures/header/header_Icon3.svg" alt="Instagram logo" aria-label='Link to Instagram.'/></a>
                    <a className='socialMedia-icon' href="https://www.youtube.com/" target='_blank'><img id='socialMedia4' src="pictures/header/header_Icon4.svg" alt="YouTube logo" aria-label='Link to YouTube.'/></a>
                </div>
            </div>
            <div className="nav-bar">
                <a id='brandLogo-storaid' href="/" aria-label='Link back to homepage.'><img src="pictures/header/storAid_Logo.svg" alt="StorAid company logo." aria-label='StorAid company logo.'/></a>
                <nav className='navLink-wrapper'>
                    <a href="/" className="nav-links" aria-label='Link to Homepage.'>Home</a>
                    <a href="/AboutUs" className="nav-links" aria-label='Link to About us.'>About Us</a>
                    <a href="/Services" className="nav-links" aria-label='Link to Services.'>Services</a>
                    <a href="/ContactUs" className="nav-links" aria-label='Link to Contact us.'>Contact Us</a>
                </nav>
                <Button id="discover-btn" /> 
            </div>
        </div>
    </header>

  )
}

export default Header