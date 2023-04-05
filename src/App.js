import React from 'react';
import FlippableCard from './components/Flippable-card';
import "./app.css";

function App() {
  return (
    <div className="App">

      <div className="header pa2 mt2 shadow-1 br3">
        <h1 className=''>Kattints az egyik nyuszira és kapsz tőle egy locsolóverset!</h1>
        <p className='f5'>by Károly Szabolcs © 2023</p>
      </div>

      <div className='cards'>
        <FlippableCard />
        <FlippableCard />
      </div>
    </div>
  );
}

export default App;
