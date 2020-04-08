import React, { useEffect, useState } from 'react'
import './index.scss'

export default () => {

  return <div className="container max-width window-height max-flex-room">
    <div className="container max-flex-room flex-column justify-center align-center">
      <h3>Ms. {process.env.REACT_APP_RECIPIENT}</h3>

      <p>I must decline my attendance to your Corona Fiesta, </p>
      <p>as I am trying to stay the fuck away from people right now.</p>

      <h3>Sincerly,</h3>
      <h3>{process.env.REACT_APP_SENDER}</h3>

      <div className='container hover-text'>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{
          paddingTop: 40,
          paddingBottom: 40
        }}>
          Click Here to Respond
        </a>
      </div>
    </div>
  </div>
}
