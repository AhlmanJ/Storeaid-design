import React from 'react'
import '././Hero.css'
import DiscoverMore_Btn from '../../elements/DiscoverMore_Btn'

function Hero() {
  return (
    <div className='hero'>
        <div className='heroText-container'>
            <h1>Welcome to StorAid</h1>
            <h2>Space Simplified,<span id='heroH2-span'>Storage Perfected</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit<span className='heroP-span'></span>amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at<span className='heroP-span'></span>euismod sem ipsum ac dolor.</p>
            <DiscoverMore_Btn />
        </div>
        <img id='hero-img' src="pictures/hero/Hero-img.svg" alt="Image of a person carrying a box." />
    </div>
  )
}

export default Hero