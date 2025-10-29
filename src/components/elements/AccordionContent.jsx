import React, { useState } from 'react'
import './Accordion.css'

/*
Here I use the React hook useState() to add and remove the class 'active', to open and close my accordion. 
If 'active' is 'false' it becomes 'true' and vice versa when you click on any of the sections in my accordion. 
In the className 'q-and-a' the name becomes 'q-and-a + active' if 'active' is true. 
To solve this I have looked for info on Youtube and then asked chatGPT how to solve the problem in the className and then asked AI to "break down" 
the code and explain what each part does.
*/


function AccordionContent({faqs}) {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active)
    }

  return (
    <div className='faq-container'>
        <div className={`q-and-a ${active ? 'active': ''}`} onClick={() => handleClick()}>
            <div className="question"><h5 className='question-h5'>{ faqs.title }</h5> <div className='arrow-icon'></div></div>
            <div className="answer"><p className='answer-txt'>{ faqs.description }</p></div>
        </div>
    </div>
  )
}

export default AccordionContent