import React from 'react'
import './TileSmall.css'

function TileSmallContent(props) {
  return (
    <div className="tileSmall">
        <h2 className="tileSmallHeading">{props.heading}</h2>
        <p className="tileSmallText">{props.text}</p>
    </div>
  )
}

export default TileSmallContent