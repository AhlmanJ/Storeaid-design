import React from 'react'
import Banner from '../components/sections/banner/Banner'
import SubscribeForm from '../components/elements/SubscribeForm'
import Subscribe from '../components/sections/subscribe/Subscribe'

function ContactUs() {
  return (
    <>
      <section className='banner'>
        <Banner />
      </section>
      <section className='subscribe'>
        <Subscribe />
      </section>
    </>
  )
}

export default ContactUs