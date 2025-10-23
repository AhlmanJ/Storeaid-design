import './PriceList.css'

import React from 'react'

function PriceListContent(props) {
  return (
    <div className='priceList'>
        <h5>Small Unit</h5>
        <div className='priceContainer'>
            <img className='dollarIcon' src="public/pictures/priceList/dollar-icon.svg" alt="" />
            <h3 className='price'>{props.price}</h3>
            <h6 className='month'>/month</h6>
        </div>
        <p className='price-txt'>Phasellus sollicitudin sapien eu<span className='txt-br'></span>massa accumsan, quis semper<span className='txt-br'></span>odio suscipit.</p>
        <div className='line'></div>
        <div className='checkbox-container'>
            <div className='box'>
                <div className='checkbox-bg'><div className='checkbox-content'></div></div>
                <p className='checkbox-txt'>Nam nec ipsum in dolor</p>
            </div>
            <div className='box'>
                <div className='checkbox-bg'><div className='checkbox-content'></div></div>
                <p className='checkbox-txt'>Fusce nec ligula ut arcu</p>
            </div>
            <div className='box'>
                <div className='checkbox-bg'><div className='checkbox-content'></div></div>
                <p className='checkbox-txt'>Aliquam pulvinar arcu in</p>
            </div>
            <div className='box'>
                <div className='checkbox-bg'><div className='checkbox-content'></div></div>
                <p className='checkbox-txt'>Duis gravida enim porta</p>
            </div>
            <div className='box'>
                <div className='checkbox-bg'><div className='checkbox-content'></div></div>
                <p id='checkbox-txt5' className='checkbox-txt'>Etiam eget libero non ligula</p>
            </div>
            <div className='rentNow-btn'><a href="/Booking" aria-label='"Rent Now" button to go to the booking page.'><p>Rent Now</p></a></div>
        </div>
    </div>
  )
}

export default PriceListContent