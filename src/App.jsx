import { useState } from 'react'
import './App.css'
import { RouterPrincipal } from './router/RouterPrincipal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterPrincipal/>
    </>
  )
}

export default App
