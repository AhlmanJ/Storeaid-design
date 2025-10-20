import React from 'react'
import Hero from '../components/sections/hero/Hero'
import About from '../components/sections/about-us/About' 
import Banner from '../components/sections/banner/Banner'

const AboutUs = () => {
  return (
    <div>
      <section className='banner'>
        <div className='container'>
          <Banner />
        </div>
      </section>

      <section className='aboutUs'>
        <About />
      </section>
    </div>
  )
}

export default AboutUs