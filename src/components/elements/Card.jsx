import React, { useEffect, useState } from 'react'
import './Card.css'

import CardContent from './CardContent'
const Card = () => {

  const apiUrl = 'https://win25-jsf-assignment.azurewebsites.net/api/blogs'
  const [card,setCard] = useState([])
  
  useEffect(() => {

    const getData = async () => {
        try{
          const res = await fetch(apiUrl)
          if(!res.ok){
            throw new Error(`Status ${res.status}`)
          }
          const data = await res.json()
          setCard(data)
        }catch(error) {
          console.error(`ERROR: ${error}`)
        }
    }
      getData()
    }, [])
  return (
    <>
      {
        card.length > 0 && card.map(card => ( 
          <CardContent key={card.id}  card={card} />
          ))
      }
    </>
  )
}
export default Card