import React from 'react'
import Button from '../elements/Button'
import './Header.css'

function Header() {
  return (
    <header>
        <div className="container">
            <div className="contactInfo_Bar">
                <div className='left_Content'>
                    <img src="pictures/header/phone_Icon.svg" alt="an icon that looks like a phone" />
                    <a href="#"><p id='nr_Text'>+46 8 123 122 44</p></a>
                    <img id='mail_Icon' src="pictures/header/mail_Icon.svg" alt="Images of a an icon that looks like a letter" />
                    <a href="#"><p id='mail_Text'>contact@domain.com</p></a>
                </div>
                <div className='right_Content'>
                    <a className='socialMedia_icon' href="#"><img id='socialMedia1' src="pictures/header/header_Icon1.svg" alt="Facebook logo" /></a>
                    <a className='socialMedia_icon' href="#"><img id='socialMedia2' src="pictures/header/header_Icon2.svg" alt="Twitter logo" /></a>
                    <a className='socialMedia_icon' href="#"><img id='socialMedia3' src="pictures/header/header_Icon3.svg" alt="Instagram logo" /></a>
                    <a className='socialMedia_icon' href="#"><img id='socialMedia4' src="pictures/header/header_Icon4.svg" alt="YouTube logo" /></a>
                </div>
            </div>
            <div className="nav_Bar">
                <a id='brandLogo_Storaid' href="#"><img src="pictures/header/storAid_Logo.svg" alt="StorAid brand logo" /></a>
                <div className='navLink_Wrapper'>
                    <a href="/" class="nav_Links">Home</a>
                    <a href="/AboutUs" className="nav_Links">About Us</a>
                    <a href="/Services" className="nav_Links">Services</a>
                    <a href="/ContactUs" className="nav_Links">Contact Us</a>
                </div>
                <Button />            
            </div>
        </div>
    </header>

  )
}

export default Header