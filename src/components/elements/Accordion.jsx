import React, { useEffect, useState } from 'react'
import './Accordion.css'
import AccordionContent from './AccordionContent'

const Accordion = () => {
    const apiUrl ='https://win25-jsf-assignment.azurewebsites.net/api/faqs'
    const [faqs,setFaqs] = useState([])

    useEffect(() => {
        const getData = async () => {
            try{
                const res = await fetch(apiUrl)
                if(!res.ok){
                    throw new Error(`Status ${res.status}`)
                }
                const data = await res.json()
                setFaqs(data)
                console.log(data)
            }catch(error) {
                console.error(`ERROR $(error)`)
            }
        }
        getData()
    }, [])

  return (
    <>
        {
            faqs.length > 0 && faqs.map(faqs => ( 
            <AccordionContent key={faqs.id}  faqs={faqs} />
            ))
        }
    </>
  )
}

export default Accordion