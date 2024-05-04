import './App.css';
import React from 'react';
import shark from './shark.svg'
import seaweed from './seaweed.gif'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={shark} className="App-logo" alt="logo" />
        <p className="words">
          Jett's portfolio homepage
        </p>
        <a
          className="Resume"
          href="https://docs.google.com/document/d/1Wtb71jotiXjxGAhz_mg2CI1tPwaQOyH8VWmiCbcZGAs/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </header>
      </div>
  );
}

export default App;
