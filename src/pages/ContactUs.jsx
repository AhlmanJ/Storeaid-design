import React from 'react'
import Banner from '../components/sections/banner/Banner'
import SubscribeForm from '../components/elements/SubscribeForm'
import Subscribe from '../components/sections/subscribe/Subscribe'
import FAQ from '../components/sections/faq/FAQ'
import FindUsOn from '../components/sections/findUsOn/FindUsOn'

function ContactUs() {
  return (
    <>
      <section className='banner'>
        <Banner />
      </section>
      <section className='findUsOn'>
        <FindUsOn />
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

export default ContactUs