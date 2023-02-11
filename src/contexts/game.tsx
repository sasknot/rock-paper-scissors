import type { FC, PropsWithChildren } from 'react'
import { createContext, useContext, useState } from 'react'
import { useScoreContext } from './score'

type GameContextData = {
  gameMyOption: App.GameOption | null
  gameHouseOption: App.GameOption | null
  gameStatus: 'select' | 'won' | 'lose' | 'tie'
  gameSelectOption: (v: App.GameOption) => void
  gameReset: () => void
}
type GameProviderProps = PropsWithChildren<{}>

const GameContext = createContext<GameContextData>({} as GameContextData)
const GameProvider: FC<GameProviderProps> = ({ children }) => {
  const [gameMyOption, setGameMyOption] = useState<App.GameOption | null>(null)
  const [gameHouseOption, setGameHouseOption] = useState<App.GameOption | null>(null)
  const [gameStatus, setGameStatus] = useState('select')
  const { incrementScore, decrementScore } = useScoreContext()

  function gameSelectOption (myOption: App.GameOption) {
    const options = ['rock', 'paper', 'scissors']
    const houseOption = options[Math.floor(Math.random() * (options.length - 1))] as App.GameOption

    setGameMyOption(myOption)
    setTimeout(() => {
      setGameHouseOption(houseOption)
      if (
        (myOption === 'rock' && houseOption === 'scissors')
        || (myOption === 'paper' && houseOption === 'rock')
        || (myOption === 'scissors' && houseOption === 'paper')
      ) {
        setGameStatus('won')
        incrementScore()
      } else if (
        (myOption === 'rock' && houseOption === 'rock')
        || (myOption === 'paper' && houseOption === 'paper')
        || (myOption === 'scissors' && houseOption === 'scissors')
      ) {
        setGameStatus('tie')
      } else {
        setGameStatus('lose')
        decrementScore()
      }
    }, 1000)
  }

  function gameReset () {
    setGameMyOption(null)
    setGameHouseOption(null)
    setGameStatus('select')
  }

  return (
    <GameContext.Provider
      value={{
        gameMyOption,
        gameHouseOption,
        gameStatus,
        gameSelectOption,
        gameReset
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

function useGameContext () {
  return useContext(GameContext)
}

export { GameProvider, useGameContext }
