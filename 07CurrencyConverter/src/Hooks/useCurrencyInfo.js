import React, { useState, useEffect } from 'react';

function CurrencyConverter() {
  const [currencyRates, setCurrencyRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_j5qUI2XiRDwW0FNdfvkBzQlVolZ6P8kadAB6pVF9')
      .then(response => response.json())
      .then(data => {
        setCurrencyRates(data.rates);
      })
      .catch(error => console.error('Error fetching currency rates:', error));
  }, []);

  useEffect(() => {
    if (currencyRates[baseCurrency] && currencyRates[targetCurrency]) {
      const baseRate = currencyRates[baseCurrency];
      const targetRate = currencyRates[targetCurrency];
      const converted = (amount / baseRate) * targetRate;
      setConvertedAmount(converted);
    }
  }, [currencyRates, baseCurrency, targetCurrency, amount]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleBaseCurrencyChange = (e) => {
    setBaseCurrency(e.target.value);
  };

  const handleTargetCurrencyChange = (e) => {
    setTargetCurrency(e.target.value);
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <input type="number" value={amount} onChange={handleAmountChange} />
        <select value={baseCurrency} onChange={handleBaseCurrencyChange}>
          {Object.keys(currencyRates).map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
        <span>=</span>
        <input type="number" value={convertedAmount} readOnly />
        <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
          {Object.keys(currencyRates).map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CurrencyConverter;
