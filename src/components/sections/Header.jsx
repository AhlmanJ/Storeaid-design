import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
        <div className="container">
            <div className="contactInfo_Bar">
                <div className='left_Content'>
                    <img src="pictures/header/phone_Icon.svg" alt="an icon that looks like a phone" />
                    <p id='nr_Text'>+46 8 123 122 44</p>
                    <img id='mail_Icon' src="pictures/header/mail_Icon.svg" alt="Images of a an icon that looks like a letter" />
                    <p id='mail_Text'>contact@domain.com</p>
                </div>
                <div className='right_Content'>
                    <a className='socialMedia_icon' href="#"><img id='socialMedia1' src="pictures/header/header_Icon1.svg" alt="" /></a>
                    <a className='socialMedia_icon' href="#"><img id='socialMedia2' src="pictures/header/header_Icon2.svg" alt="" /></a>
                    <a className='socialMedia_icon' href="#"><img id='socialMedia3' src="pictures/header/header_Icon3.svg" alt="" /></a>
                    <a className='socialMedia_icon' href="#"><img id='socialMedia4' src="pictures/header/header_Icon4.svg" alt="" /></a>
                </div>
            </div>
            <div className="nav_Bar">
            </div>
        </div>
    </header>

  )
}

export default Header