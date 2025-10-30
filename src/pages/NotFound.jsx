import React from 'react'
import Subscribe from '../components/sections/subscribe/Subscribe'
import NotFoundPage from '../components/sections/404page/NotFoundPage'

const NotFound = () => {
  return (
    <>
    <section className='notFound'>
      <NotFoundPage />
    </section>
    <section className='subscribe'>
      <Subscribe />
    </section>
    </>
  )
}

export default NotFound