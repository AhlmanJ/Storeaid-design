
/*
------------------------- NOTE! ------------------------- 

I have changed the color of the heading in this section as the color in the design file had too poor contrast for WCAG.

*/

import React from 'react'
import './PricingPlan.css'
import PriceListContent from '../../elements/PriceListContent'

function PricingPlan() {
  return (
    <div className='pricingPlan-container'>
        <h2 className='pricingPlan-h2'>Pricing Plan</h2>
        <h3 className='pricingPlan-h3'>Find the Perfect Plan for<span className='txt-br'></span>Your Storage Needs</h3>
        <div className='priceList-container'>
           <PriceListContent heading="Small Unit" price="50"/>
           <PriceListContent heading="Medium Unit" price="100"/>
           <PriceListContent heading="Large Unit" price="150"/>
           <PriceListContent heading="Executive Unit" price="200"/>
        </div>
    </div>
  )
}

export default PricingPlan