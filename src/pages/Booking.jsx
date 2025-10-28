import React from 'react'
import Banner from '../components/sections/banner/Banner'
import WhyChooseUs from '../components/sections/whyChooseUs/WhyChooseUs'
import LookingForSecure from '../components/sections/lookingForSecure/LookingForSecure'
import Subscribe from '../components/sections/subscribe/Subscribe'



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
      <section className='subscribe'>
        <Subscribe />
      </section>
    </>
  )
}

export default Booking