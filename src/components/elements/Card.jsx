import React from 'react'
import './Card.css'

function Card() {
  return (
    <div className='card'>
        <div className='card-img'></div>
        <div className='calendar-container'>
            <div className='icon'></div>
            <div className='calendar-txt'><p className='calendar-txt'>August 17, 2025</p></div>
        </div>
        <h6 className='card-header'>Safe and Secure: The Importance of Choosing the Right Storage</h6>
        <p className='card-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
        <a className='readMoreLink' href="*">Read more →</a>
    </div>
  )
}

export default Card