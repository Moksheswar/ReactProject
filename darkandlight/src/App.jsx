import { useEffect, useState } from 'react'
import Card from './components/card'
import Btn from './components/btn'
import { ThemeProvider } from './contexts/themeswitch'
function App() {
  const [themeMode,setTheme]=useState('light')
  const darkMode=()=>{
    setTheme('dark')
  }
  const lightMode=()=>{
    setTheme('light')
  }
  
  useEffect(()=>{
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (

    <ThemeProvider value={{themeMode,darkMode,lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <Btn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App