import { createContext, useContext } from 'react'

type GameContextData = {
  gameMyOption: App.GameOption | null
  gameHouseOption: App.GameOption | null
  gameStatus: App.GameStatus
  gameSelectOption: (v: App.GameOption) => void
  gameReset: () => void
}

export const GameContext = createContext<GameContextData>({} as GameContextData)

export default function useGameContext () {
  return useContext(GameContext)
}
