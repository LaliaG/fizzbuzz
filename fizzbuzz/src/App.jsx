import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FizzBuzzComponent from './components/FizzBuzzComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FizzBuzzComponent/>
    </>
  )
}

export default App
