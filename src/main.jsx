import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './custom-css/variable.css'
import './custom-css/global.css'
import './custom-css/BeforeAfter.css'
import './custom-css/Benefits.css'
import './custom-css/Footer.css'
import './custom-css/Hero.css'
import './custom-css/Testimonials.css'
import './custom-css/LeadForm.css'
import './custom-css/Price.css'
import './custom-css/Procedure.css'
import './custom-css/StickyBar.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
