import type { FC } from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Dialog } from './dialog'
import { Button } from './button'
import styles from './footer.module.css'
import rulesSvg from '../assets/images/image-rules.svg'

export const Footer: FC = () => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <footer className={styles.container}>
      <Button onClick={() => setIsOpened(true)}>Rules</Button>

      {createPortal(
        <Dialog
          isOpened={isOpened}
          title="Rules"
          onClose={() => setIsOpened(false)}
        >
          <img src={rulesSvg} alt="Rules" />
        </Dialog>,
        document.body
      )}
    </footer>
  )
}
