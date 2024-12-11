import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartApp } from './cartApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartApp />
  </StrictMode>,
)
