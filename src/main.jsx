import { nets } from 'face-api.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

nets.tinyFaceDetector.loadFromUri('/models').then(() => {
  console.log('Loaded model')
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
