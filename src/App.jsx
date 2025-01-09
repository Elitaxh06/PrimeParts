import { useState } from 'react'
import  { Routing }  from './Routes/Routing'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routing />
    </>
  )
}

export default App
