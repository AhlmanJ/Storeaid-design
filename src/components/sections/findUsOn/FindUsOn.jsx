import React from 'react'
import './FindUsOn.css'
import { NavLink } from 'react-router-dom'
import SocialMedia from '../../elements/SocialMedia'

function FindUsOn() {
  return (
    <div className='findUsOn-container'>
        <div className='findUsImg-container'>
            <img className='findUsOn-img' src="pictures/findUsOn/findUsOn-img.svg" alt="" />
        </div>
        <div className='findUsInfo-container'>
            <h3 className='findUs-h3'>Find Us On:</h3>
            <p className='findUs-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className='contactInfo-container'>
                <div className='contact'>
                    <div className='contactIcon-bg'>
                        <img src="pictures/findUsOn/findUsOnPhone-Icon.svg" alt="" />
                    </div>
                    <div className='findUs-info'>
                        <div className='info-wrapper'>
                            <h5 className='contact-heading'>Call Center</h5>
                            <NavLink className='navLink-FindUsOn' to="*" aria-label='Link to contact the call center.'><p className='navLink-text'>+46 8 123 122 44</p></NavLink>
                        </div>
                    </div>
                </div>
                <div className='contact'>
                    <div className='contactIcon-bg'>
                        <img src="pictures/findUsOn/findUsOnEMail-Icon.svg" alt="" />
                    </div>
                    <div className='findUs-info'>
                        <div className='info-wrapper'>
                            <h5 className='contact-heading'>Email Address</h5>
                            <NavLink className='navLink-FindUsOn' to="*" aria-label='Link to contact the company by email.'><p className='navLink-text'>contact@domain.com</p></NavLink>
                        </div>
                    </div>
                </div>
                <div className='contact'>
                    <div className='contactIcon-bg'>
                        <img src="pictures/findUsOn/findUsOnLocation-Icon.svg" alt="" />
                    </div>
                    <div className='findUs-info'>
                        <div className='info-wrapper'>
                            <h5 className='contact-heading'>Location</h5>
                            <p className='findUsOn-adress'>Klarabergsviadukten 90, Stockholm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='finduUsOn-socialMedia'>
                <h5 className='ourSocialMedia'>Our Social Media</h5>
                <div className='ourSocialMedia-line'></div>
                <div className='socialMediaIcons-container'>
                    <SocialMedia />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FindUsOn