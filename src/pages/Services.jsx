import React from 'react'
import Banner from '../components/sections/banner/Banner'
import OurServices from '../components/sections/our-services/OurServices'
import Testimonials from '../components/sections/testimonials/Testimonials'




const Services = () => {
  return (
    <>
      <section className='banner'>
        <Banner />
      </section>
      <section className='ourServices'>
        <OurServices />
      </section>
      <section className='testimonials'>
        <div id='testimonials-bg'><Testimonials /></div>
      </section>
    </>
  )
}

export default Services