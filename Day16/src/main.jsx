import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Appu from './Appmanystate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Appu/>
  </StrictMode>,
)
