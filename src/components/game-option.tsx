import type { CSSProperties, FC } from 'react'
import { ReactComponent as IconPaper } from '../assets/images/icon-paper.svg'
import { ReactComponent as IconScissors } from '../assets/images/icon-scissors.svg'
import { ReactComponent as IconRock } from '../assets/images/icon-rock.svg'
import styles from './game-options.module.css'

type GameOptionProps = {
  type?: App.GameOption | null
  style?: CSSProperties
  onClick?: (t: App.GameOption) => void
}

export const GameOption: FC<GameOptionProps> = ({
  type = null,
  style,
  onClick
}) => {
  return (
    <button
      type="button"
      className={`${styles.container} ${type && styles[type]}`}
      style={style}
      onClick={() => onClick && type && onClick(type)}
    >
      {type === 'paper' && (<IconPaper />)}
      {type === 'scissors' && (<IconScissors />)}
      {type === 'rock' && (<IconRock />)}
    </button>
  )
}
