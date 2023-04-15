import { FC } from 'react'
import { useScoreContext } from '../hooks'
import styles from './header.module.css'

export const Header: FC = () => {
  const { score } = useScoreContext()

  return (
    <header className={styles.container}>
      <h1>
        Rock<br />
        Paper<br />
        Scissors
      </h1>

      <section>
        <strong>Score</strong>
        <em>{score}</em>
      </section>
    </header>
  )
}
