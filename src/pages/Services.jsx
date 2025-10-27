import React from 'react'
import Banner from '../components/sections/banner/Banner'
import OurServices from '../components/sections/ourServices/OurServices'
import Testimonials from '../components/sections/testimonials/Testimonials'
import LookingForSecure from '../components/sections/lookingForSecure/LookingForSecure'




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
      <section className='looking'>
        <LookingForSecure />
      </section>
    </>
  )
}

export default Services