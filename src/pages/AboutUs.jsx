import React from 'react'
import Hero from '../components/sections/hero/Hero'
import About from '../components/sections/about-us/About' 

const AboutUs = () => {
  return (
    <div>
      <div className='banner'>
        <div className='container'>
          <div className='banner-text'>
          <h1 className='banner-h1'>About Us</h1>
          <p className='banner-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <span className='text-br'></span> ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>
      </div>

      <section className='aboutUs'>
        <About />
      </section>
    </div>
  )
}

export default AboutUs