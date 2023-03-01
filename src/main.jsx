import { nets } from 'face-api.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

await nets.ssdMobilenetv1.loadFromUri('/models')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
