import { useState } from 'react'
import { InputBox } from './Components';
import useCurrencyInfo from './assets/hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('INR')
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  const currencyOptions = useCurrencyInfo(fromCurrency)

  const options = Object.keys(currencyOptions)

  const swapCurrencies = () => {
    const temp = fromCurrency
    setFromCurrency(toCurrency)
    setToCurrency(temp)
  }

  const convert = () => {
    if (currencyOptions && currencyOptions[toCurrency]) {
        const rate = currencyOptions[toCurrency]
        setConvertedAmount(amount * rate)
    }
  }

  const BackgroundImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VycmVuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60';
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={setAmount}
                                onCurrencyChange={setFromCurrency}
                                currencyOptions={options}
                                selectedCurrency={fromCurrency}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swapCurrencies}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                onAmountChange={setConvertedAmount}
                                onCurrencyChange={setToCurrency}
                                currencyOptions={options}
                                selectedCurrency={toCurrency}
                                amountDisable={true}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert
                        </button>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default App