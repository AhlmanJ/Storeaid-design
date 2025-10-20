import React from 'react'
import './OurServices.css'
import Tile from '../../elements/Tile'
import TileContent from '../../elements/TileContent'

function OurServices() {
  return (
    <div className='services-container'>
      <div className='text-content'>
        <div className='left-txt'>
          <h4>Our Services</h4>
          <h3>Specialized Storage for<span id='h3-br'></span>Every Special Item</h3>
        </div>
        <div className='right-txt'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui<span className='txt-br'></span>lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus<span className='txt-br'></span>eget elit gravida.</p>
        </div>
      </div>
      <div className='tile-container'>
        <div className='tile-wrapper1'>
          <TileContent heading='Diverse Unit Sizes' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'/>
          <TileContent heading='Moving Assistance' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'/>
        </div>
        <div className='imgBox'></div>
        <div className='tile-wrapper2'>
          <TileContent heading='Vehicle Storage' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'/>
          <TileContent heading='Top-Notch Security' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'/>
        </div>
      </div>
    </div>
  )
}

export default OurServices