import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState(80);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
    alert('Hello Member !!');
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  const handleSayWelcome = () => {
    alert('Welcome');
  };

  const handleSyntheticClick = (event) => {
    console.log('Synthetic Event:', event);
    alert('I was clicked');
  };

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    const converted = parseFloat(amount || 0) * 80;
    alert(`Converting to Euro Amount is ${converted}`);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br /><br />
      <button onClick={handleSayWelcome}>Say Welcome</button>
      <button onClick={handleSyntheticClick}>Click Me</button>

      <h2>Currency Converter</h2>
      <form onSubmit={handleCurrencySubmit}>
        <label>Amount (INR): </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <label>Currency: </label>
        <input type="text" value="Euro" readOnly />
        <br /><br />
        <button type="submit">Convert</button>
      </form>
    </div>
  );
}
