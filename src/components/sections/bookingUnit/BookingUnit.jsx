
/*
------------------------- NOTE! ------------------------- 

I have changed the color of the heading in this section as the color in the design file had too poor contrast for WCAG.

*/

import React from 'react'
import './BookingUnit.css'
import BookingForm from '../../elements/BookingForm'

function BookingUnit() {
  return (
    <div className='bookingUnit-container'>
        <div className='booking-leftSide'>
            <h2 className='booking-h2'>Booking Unit</h2>
            <h3 className='booking-h3'>Book Your Storage Unit Now & Simplify Your Life!</h3>
            <div className='booking-ImgContainer'></div>
        </div>
        <div className='booking-rightSide'>
            <p className='booking-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
            <BookingForm />
        </div>
    </div>
  )
}

export default BookingUnit