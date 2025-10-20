import React from 'react'
import Hero from '../components/sections/hero/Hero'
import About from '../components/sections/about-us/About'

function HomePage() {
  return (
    <div>
        <Hero />
        <section className='aboutUs'>
          <About />
        </section>
    </div>
  )
}

export default HomePage