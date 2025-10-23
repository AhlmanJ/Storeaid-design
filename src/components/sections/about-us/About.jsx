import React from 'react'
import './About.css'
import DiscoverMore_Btn_LightBg from '../../elements/DiscoverMore_Btn_LightBg'
import TileSmallContent from '../../elements/TileSmallContent'

function About() {
  return (
    <div className='about'>
      <div className='left-content'>
        <div className='img-container'></div>
        <div className='info-container'>
          <div className='experience'>
            <h2>12+</h2>
            <p>Years of experience</p>
          </div>
          <div className='clients'>
            <h2>150K+</h2>
            <p>Satisfied clients</p>
          </div>
          <div className='warehouse'>
            <h2>35+</h2>
            <p>Warehouse</p>
          </div>
        </div>
      </div>
      <div className='right-content'>
        <h4>About Us</h4>
        <h3>Providing a Safe Space for<span id='h3-br'></span>Your Treasured Items</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui<span className='text-br'></span>lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue.<span className='text-br'></span>Phasellus eget elit gravida.</p>
        <div className='box-container'> 
            <TileSmallContent heading='Vision' text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.'/>
            <TileSmallContent heading='Mission' text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.'/>
        </div>
        <div className='contact-container'>
          <DiscoverMore_Btn_LightBg />
          <div className='contactInfo-container'>
            <div className='phoneicon-background'>
              <img id='yellowPhone' src="public/pictures/aboutUs/Yellow-phone-icon.svg" alt="An icon that looks like a phone" />
            </div>
            <div className='moreInfo'>
              <h5>More Information<span id='nr-Br'><a href="*" aria-label='Link to contact the company by phone.'><h6 id='phone-nr'>+46 8 123 122 44</h6></a></span> </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About