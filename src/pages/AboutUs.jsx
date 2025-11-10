import React from 'react'
import Hero from '../components/sections/hero/Hero'
import About from '../components/sections/about-us/About' 
import Banner from '../components/sections/banner/Banner'
import Brands from '../components/sections/brands/Brands'
import Testimonials from '../components/sections/testimonials/Testimonials'
import WhyChooseUs from '../components/sections/whyChooseUs/WhyChooseUs'
import Subscribe from '../components/sections/subscribe/Subscribe'

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
      <section className='whyChooseUs'>
        <WhyChooseUs />
      </section>
      <section className='subscribe'>
        <Subscribe />
      </section>
    </>
  )
}

export default AboutUs