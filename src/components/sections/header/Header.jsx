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
                    <a href="#"><p id='nr-text'>+46 8 123 122 44</p></a>
                    <img id='mail-icon' src="pictures/header/mail_Icon.svg" alt="An icon that looks like a letter" />
                    <a href="#"><p id='mail-text'>contact@domain.com</p></a>
                </div>
                <div className='right-content'>
                    <a className='socialMedia-icon' href="#"><img id='socialMedia1' src="pictures/header/header_Icon1.svg" alt="Facebook logo" /></a>
                    <a className='socialMedia-icon' href="#"><img id='socialMedia2' src="pictures/header/header_Icon2.svg" alt="Twitter logo" /></a>
                    <a className='socialMedia-icon' href="#"><img id='socialMedia3' src="pictures/header/header_Icon3.svg" alt="Instagram logo" /></a>
                    <a className='socialMedia-icon' href="#"><img id='socialMedia4' src="pictures/header/header_Icon4.svg" alt="YouTube logo" /></a>
                </div>
            </div>
            <div className="nav-bar">
                <a id='brandLogo-storaid' href="#"><img src="pictures/header/storAid_Logo.svg" alt="StorAid brand logo" /></a>
                <nav className='navLink-wrapper'>
                    <a href="/" className="nav-links">Home</a>
                    <a href="/AboutUs" className="nav-links">About Us</a>
                    <a href="/Services" className="nav-links">Services</a>
                    <a href="/ContactUs" className="nav-links">Contact Us</a>
                </nav>
                <Button id="discover-btn"/> 
            </div>
        </div>
    </header>

  )
}

export default Header