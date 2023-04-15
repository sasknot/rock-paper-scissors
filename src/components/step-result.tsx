import type { FC } from 'react'
import { useGameContext } from '../hooks'
import { GameOption } from './game-option'
import { Button } from './button'
import styles from './step-result.module.css'

export const StepResult: FC = () => {
  const {
    gameMyOption, gameHouseOption, gameStatus, gameReset
  } = useGameContext()

  return (
    <section className={styles.container}>
      <div>
        <h3>You picked</h3>
        <GameOption type={gameMyOption} />
      </div>

      {gameStatus !== 'select' && (
        <div>
          <h3>{gameStatus === 'tie' ? 'It\'s a tie' : `You ${gameStatus}`}</h3>
          <Button onClick={gameReset}>Play again</Button>
        </div>
      )}

      <div>
        <h3>The house picked</h3>
        <GameOption type={gameHouseOption} />
      </div>
      {/* <div>
        <h3>The house picked</h3>
        <GameOption type="scissors" />
      </div> */}
    </section>
  )
}
