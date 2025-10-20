import React from 'react'
import Hero from '../components/sections/hero/Hero'
import About from '../components/sections/about-us/About'
import Brands from '../components/sections/brands/Brands'

function HomePage() {
  return (
    <div>
        <Hero />
        <section className='aboutUs'>
          <About />
        </section>
        <section className='brands'>
          <Brands />
        </section>
    </div>
  )
}

export default HomePage