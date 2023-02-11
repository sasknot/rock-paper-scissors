import { FC, PropsWithChildren } from 'react'
import styles from './button.module.css'

type ButtonProps = PropsWithChildren<{
  onClick?: () => void
}>

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" className={styles.container} onClick={onClick}>
      {children}
    </button>
  )
}
