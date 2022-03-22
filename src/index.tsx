import { GlobalStorage } from 'contexts/GlobalStorage'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
   <React.StrictMode>
      <GlobalStorage>
         <App />
      </GlobalStorage>
   </React.StrictMode>,
   document.getElementById('root')
)
