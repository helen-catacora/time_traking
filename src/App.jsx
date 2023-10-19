
import './App.css'
import Card from './componentes/Card'
import { weekly } from './assets/weeklyAPI'
import Tarjetas from './componentes/Tarjetas'
function App() {

  return (
    <>
      <Tarjetas weekly={weekly}/>
    </>
  )
}

export default App
