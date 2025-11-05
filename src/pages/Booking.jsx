import React from 'react'
import Banner from '../components/sections/banner/Banner'
import WhyChooseUs from '../components/sections/whyChooseUs/WhyChooseUs'
import LookingForSecure from '../components/sections/lookingForSecure/LookingForSecure'
import Subscribe from '../components/sections/subscribe/Subscribe'
import FAQ from '../components/sections/faq/FAQ'
import BookingUnit from '../components/sections/bookingUnit/BookingUnit'



const Booking = () => {
  return (
    <>
      <section className='banner'>
          <Banner />
      </section>
      <section className='bookingUnit'>
        <BookingUnit />
      </section>
      <section className='whyChooseUs'>
      <WhyChooseUs />
      </section>
      <section className='looking'>
        <LookingForSecure />
      </section>
      <section className='faq'>
        <FAQ />
      </section>
      <section className='subscribe'>
        <Subscribe />
      </section>
    </>
  )
}

export default Booking