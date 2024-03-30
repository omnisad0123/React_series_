import React, { useState, useEffect } from 'react';

function CurrencyConverter() {
  const [currencyRates, setCurrencyRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [loading, setLoading] = useState(true);
   const [swap,setswap]=useState()
  

  useEffect(() => {
    fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_j5qUI2XiRDwW0FNdfvkBzQlVolZ6P8kadAB6pVF9')
      .then(response => response.json())
      .then(data => {
        setCurrencyRates(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching currency rates:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading && currencyRates[baseCurrency] && currencyRates[targetCurrency]) {
      const baseRate = currencyRates[baseCurrency].value;
      const targetRate = currencyRates[targetCurrency].value;
      const converted = (amount / baseRate) * targetRate;
      setConvertedAmount(converted);
    }
  }, [loading, currencyRates, baseCurrency, targetCurrency, amount,swap]);

  
  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }
  const swaping=function(){
       setTargetCurrency(baseCurrency);
       setBaseCurrency(targetCurrency);
    //    setAmount(convertedAmount)
  }

  return (
    <div className="max-w-3xl mx-auto mt-20 p-4  bg-green-700 rounded-lg shadow-lg h-[200px]">

      <h1 className="text-2xl font-bold mb-4 my-5">Currency Converter</h1>
      <div className="flex items-center">
        <input
          type="number"
          value={amount}
          onChange={ (e) => {
            setAmount(e.target.value);
          }}
          className="rounded-l-md p-2 border border-gray-300 bg-gray-200 focus:outline-none focus:border-blue-500 flex-1"
        />
        <select
          value={baseCurrency}
          onChange={(e)=>{
            setBaseCurrency(e.target.value)
          }}
          className=" rounded-r border-t border-r border-b border-gray-2300 p-2 bg-blue-600 focus:outline-none flex-shrink-0 min-w-20"
        >
          {Object.keys(currencyRates).map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
        <span className="p-2">=</span>
        <input
          type="number"
          value={convertedAmount}
          readOnly
          className="rounded-r-md p-2 border border-gray-300 bg-gray-200 focus:outline-none flex-1"
        />
        <select
          value={targetCurrency}
          onChange={(e)=>{setTargetCurrency(e.target.value)}}
          className=" rounded-r border-t border-r border-b border-gray-2300 p-2 bg-blue-600 focus:outline-none flex-shrink-0 min-w-20"
        >
          {Object.keys(currencyRates).map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    
      <button 
         onClick={swaping}

       className='rounded-sm text-white bg-red-500 mt-4 py-2 px-4'>Swap</button>
      
    </div>
  );
  
}

export default CurrencyConverter;
