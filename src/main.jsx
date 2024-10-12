import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StudentProvider from './Contexts/Students.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentProvider>
    <App />
    </StudentProvider>
  </StrictMode>,
)
