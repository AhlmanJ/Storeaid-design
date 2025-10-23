import React from 'react'
import './PricingPlan.css'
import PriceListContent from '../../elements/PriceListContent'

function PricingPlan() {
  return (
    <div className='pricingPlan-container'>
        <h4>Pricing Plan</h4>
        <h3>Find the Perfect Plan for<span className='txt-br'></span>Your Storage Needs</h3>
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