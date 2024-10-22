import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inputdiv from './components/inputdiv'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    // setConvertedAmount(amount)
    // setAmount(convertedAmount)
  }

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-no-repeat bg-cover space-y-5' 
    style={{backgroundImage:'url(https://img.freepik.com/premium-photo/3d-illustration-stack-gold-coins-with-forex-chart-stock-market-graph-background_795422-6851.jpg)'}}>
      <h1 className='text-white text-2xl'>Currency Converter</h1>
      <div className='bg-white w-96 p-10 rounded-lg shadow-lg backdrop-blur-sm backdrop-filter bg-opacity-30 flex flex-col space-y-4 items-center'>
        <Inputdiv 
        label="From" 
        amount={amount}
        currencyOptions={options}
        onCurrencyChange={(currency) => setFrom(currency)}
        onAmountChange={(amount) => setAmount(amount)}
        selectedCurrency={from}
        />
        <button 
        onClick={swap}
        className='bg-blue-600 text-white w-20 rounded-md p-1 text-sm'
        >SWAP</button>
        <Inputdiv 
        label="To"
        amount={convertedAmount}
        currencyOptions={options}
        onCurrencyChange={(currency) => setTo(currency)}
        selectedCurrency={to}
        amountDisabled
        />
        <button 
        onClick={convert}
        className='bg-blue-600 w-full text-white rounded-md p-3 text-lg'>
        CONVERT</button>
      </div>
    </div>
  )
}

export default App
