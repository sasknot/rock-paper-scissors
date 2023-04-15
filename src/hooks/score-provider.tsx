import type { FC, PropsWithChildren } from 'react'
import { useState } from 'react'
import { ScoreContext } from './use-score-context'

const ScoreProvider: FC<PropsWithChildren> = ({ children }) => {
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

export { ScoreProvider }
