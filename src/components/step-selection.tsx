import type { FC } from 'react'
import { useGameContext } from '../contexts/game'
import { GameOption } from './game-option'
import styles from './step-selection.module.css'
import BGTriangle from '../assets/images/bg-triangle.svg'

export const StepSelection: FC = () => {
  const { gameSelectOption } = useGameContext()

  return (
    <section className={styles.container}>
      <img src={BGTriangle} alt="" />
      <GameOption
        type="paper"
        style={{ left: 0, top: 0 }}
        onClick={(type) => gameSelectOption(type)}
      />
      <GameOption
        type="scissors"
        style={{ right: 0, top: 0 }}
        onClick={(type) => gameSelectOption(type)}
      />
      <GameOption
        type="rock"
        style={{ left: '50%', bottom: 0, transform: 'translateX(-50%)' }}
        onClick={(type) => gameSelectOption(type)}
      />
    </section>
  )
}
