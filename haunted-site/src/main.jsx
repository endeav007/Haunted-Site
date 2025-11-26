import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SwapImage from './ImageSwap.jsx'
import Scene from './TransitionScene.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Scene />
    <SwapImage imagePrefix={"./Image1"}/>
  </StrictMode>,
)
