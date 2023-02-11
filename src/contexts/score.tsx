import type { FC, PropsWithChildren } from 'react'
import { createContext, useContext, useState } from 'react'

type ScoreContextData = {
  score: number
  incrementScore: (v?: number) => void
  decrementScore: (v?: number) => void
}
type ScoreProviderProps = PropsWithChildren<{}>

const ScoreContext = createContext<ScoreContextData>({} as ScoreContextData)
const ScoreProvider: FC<ScoreProviderProps> = ({ children }) => {
  const [score, setScore] = useState(0)

  function incrementScore (value?: number) {
    setScore(score + (value || 1))
  }
  function decrementScore (value?: number) {
    const newScore = score - (value || 1)
    setScore(newScore < 0 ? 0 : newScore)
  }

  return (
    <ScoreContext.Provider value={{ score, incrementScore, decrementScore }}>
      {children}
    </ScoreContext.Provider>
  )
}

function useScoreContext () {
  return useContext(ScoreContext)
}

export { ScoreProvider, useScoreContext }
