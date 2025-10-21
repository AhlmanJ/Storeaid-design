
/* A component for the tiles that I reuse multiple times in the "Our Services" section. To change the Title and Text I use "props".
   See "TileContent" which is the "React-hook" that I use to be able to do this. */

import React from 'react'
import './Tile.css'
import TileContent from "./TileContent"

function Tile() {
  return (
      <div className='tileContent'>
        <TileContent/>
      </div>
  )
}

export default Tile