import React from 'react'
import Hero from '../components/sections/hero/Hero'
import About from '../components/sections/about-us/About'
import Brands from '../components/sections/brands/Brands'
import OurServices from '../components/sections/our-services/OurServices'
import Testimonials from '../components/sections/testimonials/Testimonials'

function HomePage() {
  return (
    <>
        <Hero />
        <section className='aboutUs'>
          <About />
        </section>
        <section className='brands'>
          <Brands />
        </section>
        <section className='ourServices'>
          <OurServices />
        </section>
        <section className='testimonials'>
          <img id='bg-img' src="public/pictures/testimonials/Testimonials-Bg-Img.Svg" alt="A picture of a warehouse worker." />
          <div id='testimonials-bg'><Testimonials /></div>
        </section>
    </>
  )
}

export default HomePage