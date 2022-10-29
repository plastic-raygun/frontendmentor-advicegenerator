import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json() )
      .then((res) => {
        let data = res.slip;
        setQuote(data);
      })
  }, []);

  return (
    <div className="App">
      <h1>{quote.advice}</h1>
    </div>
  );
}

export default App;
