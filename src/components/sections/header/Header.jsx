import React from 'react'
import Button from '../../elements/Button'
import './Header.css'
import { NavLink } from 'react-router-dom'
import SocialMedia from '../../elements/SocialMedia'

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
                    <SocialMedia />
                </div>
            </div>
            <div className="nav-bar">
                <NavLink id='brandLogo-storaid' to="/" aria-label='Link back to homepage.'><img src="pictures/header/storAid_Logo.svg" alt="StorAid company logo." aria-label='StorAid company logo.'/></NavLink>
                <nav className='navLink-wrapper'>
                    <NavLink to="/" className="nav-links" aria-label='Link to Homepage.'>Home</NavLink>
                    <NavLink to="/AboutUs" className="nav-links" aria-label='Link to About us.'>About Us</NavLink>
                    <NavLink to="/Services" className="nav-links" aria-label='Link to Services.'>Services</NavLink>
                    <NavLink to="/ContactUs" className="nav-links" aria-label='Link to Contact us.'>Contact Us</NavLink>
                </nav>
                <Button id="discover-btn" /> 
            </div>
        </div>
    </header>

  )
}

export default Header