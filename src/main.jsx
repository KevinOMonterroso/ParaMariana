import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './WebApp.css'
import WebApp from './WebApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <WebApp />
    </BrowserRouter>
  </StrictMode>,
)
