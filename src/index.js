import React from 'react'
import ReactDOM from 'react-dom'
import { unregister }  from './serviceWorker'
import NoRSVP from './NoRSVP'
const dotenv = require('dotenv')
console.log(process.env)

ReactDOM.render(
  <React.StrictMode>
    <NoRSVP />
  </React.StrictMode>,
  document.getElementById('root')
)

unregister()
