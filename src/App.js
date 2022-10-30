import React, { useEffect, useCallback, useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getQuote();
  }, [])

  const getQuote = useCallback(async () => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json() )
      .then((res) => {
        let data = res.slip;
        setQuote(data);
      })
  }, [quote]);

  return (
    <div className="App">
      <div className="container">
        <h3 class="advice-title">Advice #{quote.id}</h3>
        <h1 class="quote-text">"{quote.advice}"</h1>
        <div className="divider"></div>
      </div>
      <button className="dice-btn" onClick={getQuote}></button>
    </div>
  );
}

export default App;
