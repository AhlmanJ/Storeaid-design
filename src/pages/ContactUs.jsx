import React from 'react'
import Banner from '../components/sections/banner/Banner'
import Subscribe from '../components/sections/subscribe/Subscribe'
import FAQ from '../components/sections/faq/FAQ'
import FindUsOn from '../components/sections/findUsOn/FindUsOn'
import GetInTouch from '../components/sections/getInTouch/GetInTouch'

function ContactUs() {
  return (
    <>
      <section className='banner'>
        <Banner />
      </section>
      <section className='getInTouch'>
        <GetInTouch />
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