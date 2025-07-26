import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LoadScript } from '@react-google-maps/api';
import App from './App'

export const API_KEY = import.meta.env.VITE_API_KEY;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LoadScript googleMapsApiKey={API_KEY}>
        <App />
      </LoadScript>
    </BrowserRouter>
  </StrictMode>,
)
