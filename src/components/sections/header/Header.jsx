
/*
NOTE! 
I have chosen NOT to code a "mailto:" and "tel:" (in the two links for this), in this case as I know that one should be careful with email and phone links.
My idea is that if or when this page goes into production I will add these functions at that time.
*/



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
                    <NavLink id='nr-text' className='header-link' to="*" aria-label='Link to contact the company by phone.'>+46 8 123 122 44</NavLink>
                    <img id='mail-icon' src="pictures/header/mail_Icon.svg" alt="An icon that looks like a letter" />
                    <NavLink id='mail-text' className='header-link' to="*" aria-label='Link to contact the company via email.'>contact@domain.com</NavLink>
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