import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')
  // function change(color){
  //   setColor(color)
  // }
  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
        <div className='bg-neutral-800 flex flex-wrap justify-center gap-2 shadow-lg px-3 py-2 rounded-3xl'>
          <button 
          onClick={()=>setColor('white')}
          className='bg-white text-black outline-none px-4 py-1 rounded-full shadow-lg'>Light</button>
          <button 
          onClick={()=>setColor('black')}
          className='bg-black text-white outline-none px-4 py-1 rounded-full shadow-lg'>Dark</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
