import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function ThankYou() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '100px 20px'
    }}>
      <h1>Thank You!</h1>
      <p>Your consultation request has been sent successfully.</p>
      <p>MV Construction will be in touch soon.</p>
      <a href="/">Return to Home</a>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {window.location.pathname === '/thank-you'
      ? <ThankYou />
      : <App />}
  </StrictMode>,
)
