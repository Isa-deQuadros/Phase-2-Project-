import React from "react"
import ReactPlayer from 'react-player/youtube'

const ResponsivePlayer = ()=>{
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.comhttps://www.youtube.com/watch?v=tHYUXJIaUkQ/https://www.youtube.com/watch?v=Rq5SEhs9lws?v=ysz5S6PUM-U'
          controls={true}
          
        />
      </div>
    )

}

export default ResponsivePlayer