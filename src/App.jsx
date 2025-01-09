import { useState } from 'react'
import { Home } from './Pages/Home/Home'
import { Footer } from './Components/Footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Footer />
    </>
  )
}

export default App
