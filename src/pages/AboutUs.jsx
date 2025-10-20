import React from 'react'
import Hero from '../components/sections/hero/Hero'
import About from '../components/sections/about-us/About' 
import Banner from '../components/sections/banner/Banner'
import Brands from '../components/sections/brands/Brands'

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

      <section className='brands'>
          <Brands />
      </section>
    </div>
  )
}

export default AboutUs