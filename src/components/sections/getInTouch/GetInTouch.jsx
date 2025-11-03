import React from 'react'
import './GetInTouch.css'
import Contactform from '../../elements/Contactform'

function GetInTouch() {
  return (
    <>
        <div className='getInTouch-container'>
            <div className='getInTouch-leftSide'>
                <h1 className='getInTouch-h1'>Get in Touch</h1>
                <h3 className='getInTouch-h3'>Get Personalized Assistance-Contact Us</h3>
                <p className='getInTouch-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                <div className='getInTouch-imgBox'>
                </div>
            </div>
            <div>
                <Contactform />
            </div>
        </div>
    </>
  )
}

export default GetInTouch