import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

const currencies = {
  USD: { symbol: '$', rate: 1, name: 'US Dollar' },
  EUR: { symbol: '€', rate: 0.92, name: 'Euro' },
  GBP: { symbol: '£', rate: 0.79, name: 'British Pound' },
  JPY: { symbol: '¥', rate: 149.50, name: 'Japanese Yen' },
  CAD: { symbol: 'C$', rate: 1.36, name: 'Canadian Dollar' },
  AUD: { symbol: 'A$', rate: 1.53, name: 'Australian Dollar' }
};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(() => {
    const saved = localStorage.getItem('currency');
    return saved || 'USD';
  });

  const convertPrice = (priceInUSD) => {
    const currencyData = currencies[currency];
    return (priceInUSD * currencyData.rate).toFixed(2);
  };

  const formatPrice = (priceInUSD) => {
    const currencyData = currencies[currency];
    const convertedPrice = (priceInUSD * currencyData.rate).toFixed(2);
    return `${currencyData.symbol}${convertedPrice}`;
  };

  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
    localStorage.setItem('currency', newCurrency);
  };

  return (
    <CurrencyContext.Provider value={{ currency, currencies, convertPrice, formatPrice, changeCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
