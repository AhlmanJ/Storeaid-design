import React from 'react'
import './Hero.css'
import DiscoverMore_Btn from '../elements/DiscoverMore_Btn'

function Hero() {
  return (
    <div className='hero'>
        <div className='heroText-Container'>
            <h1>Welcome to StorAid</h1>
            <h2>Space Simplified,<span id='heroH2_span'>Storage Perfected</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit<span className='heroP_span'></span>amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at<span className='heroP_span'></span>euismod sem ipsum ac dolor.</p>
            <DiscoverMore_Btn />
        </div>
    </div>
  )
}

export default Hero