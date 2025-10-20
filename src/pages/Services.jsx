import React from 'react'
import Banner from '../components/sections/banner/Banner'
import OurServices from '../components/sections/our-services/OurServices'




const Services = () => {
  return (
    <>
      <section className='banner'>
        <Banner />
      </section>

      <section className='ourServices'>
        <OurServices />
      </section>
    </>
  )
}

export default Services