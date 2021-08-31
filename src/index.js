import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

function App() {
  return <h1>Hola Mundo</h1>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const arr = _.fill(Array(3), 'a')
console.log(arr)
