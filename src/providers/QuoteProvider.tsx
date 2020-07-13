import React, { useState, useEffect } from 'react';

export type Quote = {
  quote: string;
  author: string;
};

const initialState: Quote = {
  quote: "Don't cry because it's over, smile because it happened",
  author: 'Dr. Seuss',
};

const QuoteContext = React.createContext(initialState);

const QuoteProvider: React.FC = ({ children }) => {
  const [quote, setQuote] = useState<Quote>(initialState);

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch('https://quotes.rest/qod.json');
      const data = await response.json();
      if (data.contents) {
        setQuote(data.contents.quotes[0]);
      }
    };
    fetchQuote();
  }, []);

  return (
    <QuoteContext.Provider value={quote}>{children}</QuoteContext.Provider>
  );
};

export default QuoteProvider;
