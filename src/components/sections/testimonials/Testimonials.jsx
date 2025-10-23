import React from 'react'
import './Testimonials.css'
import TestimonialTiles from '../../elements/TestimonialTiles'
function Testimonials() {
  return (
    <div className='testimonials'>
      <div className='testimonials-content'>
        <div className='testimonialsTxt-wrapper'>
          <h4>Testimonials</h4>
          <h3>See What Our Client Have to Say</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit<span className='text-br'></span>nisi non sodales augue. Phasellus eget elit gravida.</p>
        </div>
        <div className='tile-wrapper'>
          <TestimonialTiles />
        </div>
      </div>
    </div>
  )
}
export default Testimonials