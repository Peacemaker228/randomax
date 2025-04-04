import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Wrapper } from './components/Wrapper'
import React from 'react'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <>
    <Wrapper />
    <App />
  </>,
)
