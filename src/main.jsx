import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Baseroute from './Pages/Baseroute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Baseroute />
  </StrictMode>,
)
