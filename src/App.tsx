import { useState } from 'react'
import { Refine, WelcomePage } from "@refinedev/core";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Refine>
      <WelcomePage />
    </Refine>
  )
}

export default App
