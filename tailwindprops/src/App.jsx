import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>TailWind Props</h1>
      <Card name="Neji" place="Naruto"/>
      <Card name="Itadori" place="JJK"/>
      <Card name="Tanjiro" place="DemonSlayer"/>
    </>
  )
}

export default App
