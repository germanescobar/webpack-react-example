import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const arr = _.fill(Array(3), 'a')
console.log(arr)
