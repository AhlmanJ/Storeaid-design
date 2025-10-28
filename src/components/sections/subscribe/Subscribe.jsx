import React from 'react'
import './Subscribe.css'
import SubscribeForm from '../../elements/SubscribeForm'

function Subscribe() {
  return (
    <div className='subscribe-container'>
      <div className='subscribeTxt-container'>
        <h3 className='subscribe-h3'>Subscribe Our Newsletter</h3>
        <p className='subscribe-txt'>Subscribe to our newsletter to receive early discount offers, updates and info</p>
      </div>
      <div className='form-container'>
        <SubscribeForm />
      </div>
    </div>
  )
}

export default Subscribe