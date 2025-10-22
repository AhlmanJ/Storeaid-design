import React from 'react'
import './TestimonialContent.css'

function TestimonialConent({testimonials}) {

    /* 
        I got help with this code block from chatGPT. I managed to get as far as printing the number, 
        but couldn't find a way to print icons instead.

        This code block creates a new array with as many elements (length:) as the value of "rating".
        Then we use "_" to "ignore" the elements in the existing array because we only need to know the "length" of it.
        "i" stands for index which is used to keep track of where we are in the array.
        Then we insert an image per element which is then printed in the "testimonial tile"
    
        {Array.from({ length: testimonials.rating }).map((_, i) => (
          <img
            key={i}
            src="/public/pictures/testimonials/star-icon.svg"
            alt="Star"
            className="star-icon"
          />
        ))}
        
    */

  return (
    <>  
      <div className='testimonialTiles'>
         <div className='rating'>{Array.from({ length: testimonials.rating }).map((_, i) => (
            <img
              key={i}
              src="/public/pictures/testimonials/star-icon.svg"
              alt="Star"
              className="star-icon"
            />
          ))}</div>

          <p className='comment'>{ testimonials.comment}</p>
          <div className='author-wrapper'>
              <img className='avatar' src={testimonials.avatarUrl} alt="" />
              <div className='id-wrapper'>
                  <h6 className='name'>{ testimonials.name }</h6>
                  <p className='companyName'>{ testimonials.companyName}</p>
              </div>
          <img id='quot-icon' src="/public/pictures/testimonials/TestimonialTile-Icon.svg" alt="An image of quotation marks." />
        </div>
      </div>
    </>
  )
}

export default TestimonialConent