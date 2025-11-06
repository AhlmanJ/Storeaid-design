import React from 'react'
import './FAQ.css'
import Accordion from '../../elements/Accordion'

function FAQ() {
  return (
    <div className='faq-wrapper'>
        <div className='faqTxt-container'>
            <h2 className='faqH2'>FAQs</h2>
            <h3 className='faqH3'>Frequently Ask Questions</h3>
            <p className='faqP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className='faqAccordion-container'>
          <Accordion />
        </div>
    </div>
  )
}

export default FAQ