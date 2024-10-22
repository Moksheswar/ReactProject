import React from 'react'

// const id= useId()
function inputdiv({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = 'usd',
  amountDisabled = false,
  currencyDisabled = false,
  className = ''
}) {
  return (
    <div className='bg-white w-full h-20 rounded-lg py-2 px-3 space-y-1'>
      <div className='text-gray-700 flex flex-wrap justify-between'>
        <label htmlFor="currency">{label}</label>
        <label htmlFor="Type">Type</label>
      </div>
      <div className='flex flex-wrap justify-between'>
        <input id="currency" type="number"
        placeholder="Enter amount"
        value={amount || 0}
        disabled={amountDisabled}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
        <select
        value={selectedCurrency}
        disabled={currencyDisabled}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default inputdiv