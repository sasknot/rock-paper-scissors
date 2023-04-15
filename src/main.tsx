import React from 'react'
import ReactDOM from 'react-dom/client'
import { ScoreProvider } from './hooks/score-provider'
import { GameProvider } from './hooks/game-provider'
import App from './app'
import './assets/styles/reset.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ScoreProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </ScoreProvider>
  </React.StrictMode>
)
