import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrwoserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrwoserRouter>
    <App />
  </BrwoserRouter>,
)
