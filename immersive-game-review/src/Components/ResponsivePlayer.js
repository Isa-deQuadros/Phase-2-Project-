import React, { useState } from "react"
import ReactPlayer from 'react-player/youtube'

const ResponsivePlayer = ({urlState})=>{

    return (
      
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={urlState ? urlState : "https://www.youtube.com/watch?v=B9Khb8AKuA0" }
          controls={true}
          
        />
      </div>
    )

}

export default ResponsivePlayer