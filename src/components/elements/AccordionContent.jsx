import React, { useState } from 'react'
import './Accordion.css'

function AccordionContent({faqs, active, handleClick}) {

  return (
    <div className='faq-container'>
        <div className={`q-and-a ${active === faqs.id? 'active': ''}`} onClick={() => handleClick(faqs.id)}>
            <div className="question"><h5 className='question-h5'>{ faqs.title }</h5> <div className='arrow-icon'></div></div>
            <div className="answer"><p className='answer-txt'>{ faqs.description }</p></div>
        </div>
    </div>
  )
}

export default AccordionContent