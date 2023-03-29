import React from 'react';
import FlippableCard from './components/Flippable-card';
import "./app.css";

function App() {
  return (
    <div className="App">

      <div className="header">
        <h1>Találd meg a nyuszit!</h1>
        <h2>Kattints az egyik képre, és ha nyuszi van alatta, hoz neked egy locsolóverset is!</h2>
      </div>

      <div className='cards'>
        <FlippableCard />
        <FlippableCard />
        <FlippableCard />
      </div>

    </div>
  );
}

export default App;
