import React from 'react'
import './TileSmall.css'

function TileSmallContent(props) {
  return (
    <div className="tileSmall">
        <h4 className="tileSmallHeading">{props.heading}</h4>
        <p className="tileSmallText">{props.text}</p>
    </div>
  )
}

export default TileSmallContent