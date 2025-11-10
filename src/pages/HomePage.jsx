import React from 'react'
import Hero from '../components/sections/hero/Hero'
import About from '../components/sections/about-us/About'
import Brands from '../components/sections/brands/Brands'
import OurServices from '../components/sections/ourServices/OurServices'
import Testimonials from '../components/sections/testimonials/Testimonials'
import WhyChooseUs from '../components/sections/whyChooseUs/WhyChooseUs'
import PricingPlan from '../components/sections/pricingPlan/PricingPlan'
import LookingForSecure from '../components/sections/lookingForSecure/LookingForSecure'
import BlogAndNews from '../components/sections/blogAndNews/BlogAndNews'
import Subscribe from '../components/sections/subscribe/Subscribe'

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
          <img id='bg-img' src="public/pictures/testimonials/Testimonials-Bg-Img.Svg" alt="A picture of a warehouse worker."/>
          <div id='testimonials-bg'>
            <Testimonials />
          </div>
        </section>
        <section className='whyChooseUs'>
          <WhyChooseUs />
        </section>
        <section className='pricingPlan'>
          <PricingPlan />
        </section>
        <section className='looking'>
          <LookingForSecure />
        </section>
        <section className='blogAndNews'>
          <BlogAndNews />
        </section>
        <section className='subscribe'>
          <Subscribe />
        </section>
    </>
  )
}

export default HomePage