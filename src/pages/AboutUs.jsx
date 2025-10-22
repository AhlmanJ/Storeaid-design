import React from 'react'
import Hero from '../components/sections/hero/Hero'
import About from '../components/sections/about-us/About' 
import Banner from '../components/sections/banner/Banner'
import Brands from '../components/sections/brands/Brands'
import Testimonials from '../components/sections/testimonials/Testimonials'

const AboutUs = () => {
  return (
    <>
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
      <section className='testimonials'>
        <div id='testimonials-bg'><Testimonials /></div>
      </section>
    </>
  )
}

export default AboutUs