import type { FC, PropsWithChildren } from 'react'
import { useRef, useEffect } from 'react'
import styles from './dialog.module.css'

type DialogProps = PropsWithChildren<{
  isOpened: boolean
  title?: string
  onClose?: () => void
}>

export const Dialog: FC<DialogProps> = ({
  isOpened,
  title,
  children,
  onClose
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpened) {
        document.body.style.setProperty('overflow', 'hidden')
        !dialogRef.current.open && dialogRef.current.showModal()
      } else {
        document.body.style.removeProperty('overflow')
        dialogRef.current.open && dialogRef.current.close()
      }
    }
  }, [isOpened])

  return (
    <dialog ref={dialogRef} className={styles.container} onCancel={onClose} onClick={onClose}>
      <section onClick={(e) => e.stopPropagation()}>
        <header>
          <h2>{title}</h2>
          <button type="button" onClick={onClose}>&times;</button>
        </header>

        {children}
      </section>
    </dialog>
  )
}
