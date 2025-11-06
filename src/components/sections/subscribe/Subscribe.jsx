import React from 'react'
import './Subscribe.css'
import SubscribeForm from '../../elements/SubscribeForm'

function Subscribe() {
  return (
    <div className='subscribe-container'>
      <div className='subscribeTxt-container'>
        <h2 className='subscribe-h2'>Subscribe Our Newsletter</h2>
        <p className='subscribe-txt'>Subscribe to our newsletter to receive early discount offers, updates and info</p>
      </div>
      <div className='form-container'>
        <SubscribeForm />
      </div>
    </div>
  )
}

export default Subscribe