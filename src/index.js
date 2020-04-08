import React from 'react'
import ReactDOM from 'react-dom'
import { unregister }  from './serviceWorker'
import dotenv from 'dotenv'
import NoRSVP from './NoRSVP'
dotenv.config()


ReactDOM.render(
  <React.StrictMode>
    <NoRSVP />
  </React.StrictMode>,
  document.getElementById('root')
)

unregister()
