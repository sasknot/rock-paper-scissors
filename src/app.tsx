import { useGameContext } from './contexts/game'
import { Header } from './components/header'
import { StepSelection } from './components/step-selection'
import { StepResult } from './components/step-result'
import { Footer } from './components/footer'
import './assets/styles/app.css'

export default function () {
  const { gameMyOption } = useGameContext()

  return (
    <>
      <Header />

      <main style={{ margin: '0 auto' }}>
        {gameMyOption ? (<StepResult />) : (<StepSelection />)}
      </main>

      <Footer />
    </>
  )
}
