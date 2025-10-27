import React from 'react'

function CardContent({card}) {
  return (
    <div className='card'>
        <div className='card-img'><img src={card.imageUrl} alt="A image for the blog and news aerticle." /></div>
        <div className='calendar-container'>
            <div className='icon'></div>
            <div className='calendar-txt'><p className='calendar-txt'>{card.created}</p></div>
        </div>
        
        <h6 className='card-header'>{card.title}</h6>
        <p className='card-txt'>{card.description}</p>
        <a className='readMoreLink' href="*">Read more →</a>
    </div>
  )
}

export default CardContent