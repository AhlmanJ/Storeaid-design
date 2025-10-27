import React, { useEffect, useState } from 'react'
import TestimonialConent from './TestimonialConent'

const TestimonialTiles = () => {
  const apiUrl = 'https://win25-jsf-assignment.azurewebsites.net/api/testimonials/'
  const [testimonials,setTestimonials] = useState([])

 
  useEffect(() => {
    const getData = async () => {
    try{
      const res = await fetch(apiUrl)
      const data = await res.json()
      setTestimonials(data)
    }catch(error) {
      console.error(`ERROR: ${error}`)
    }

    }

    getData()
    }, [])

  return (
    <>
      {
        testimonials.length > 0 && testimonials.map(testimonials => ( 
          <TestimonialConent key={testimonials.id}  testimonials={testimonials} />
          ))
      }
        
    </>
  )
}

export default TestimonialTiles