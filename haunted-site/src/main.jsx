import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'
import SwapImage from './ImageSwap.jsx'
import Scene from './TransitionScene.jsx'
import MainPage from './MainSite.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)
