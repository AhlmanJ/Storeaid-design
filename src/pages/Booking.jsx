import React from 'react'
import Banner from '../components/sections/banner/Banner'
import WhyChooseUs from '../components/sections/whyChooseUs/WhyChooseUs'
import LookingForSecure from '../components/sections/lookingForSecure/LookingForSecure'



const Booking = () => {
  return (
    <>
      <section className='banner'>
          <Banner />
      </section>
      <WhyChooseUs />
      <section className='looking'>
        <LookingForSecure />
      </section>
    </>
  )
}

export default Booking