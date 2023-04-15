import { createContext, useContext } from 'react'

type ScoreContextData = {
  score: number
  incrementScore: (v?: number) => void
  decrementScore: (v?: number) => void
}

export const ScoreContext = createContext<ScoreContextData>({} as ScoreContextData)

export default function useScoreContext () {
  return useContext(ScoreContext)
}
