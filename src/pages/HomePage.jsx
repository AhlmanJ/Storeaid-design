import React from 'react'
import Hero from '../components/sections/hero/Hero'
import About from '../components/sections/about-us/About'
import Brands from '../components/sections/brands/Brands'
import OurServices from '../components/sections/our-services/OurServices'

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
    </>
  )
}

export default HomePage