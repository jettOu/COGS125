import './App.css';
import React from 'react';
import shark from './shark.svg'
import seaweed from './seaweed.gif'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={shark} className="App-logo" alt="logo" />

        <img style={{ position: 'absolute',
          bottom: '10px', left: '10px', }} src={seaweed} className = "Seaweed" alt = "logo"/>

        <img style={{ position: 'absolute',
          bottom: '10px', right: '10px', }} src={seaweed} className = "Seaweed" alt = "logo"/>
        
        <img style={{ position: 'absolute',
          bottom: '10px', center: '10px', }} src={seaweed} className = "Seaweed" alt = "logo"/>
        
        <img style={{ position: 'absolute',
          bottom: '10px', left:'100px' }} src={seaweed} className = "Seaweed" alt = "logo"/>

        <img style={{ position: 'absolute',
          bottom: '10px', right:'100px' }} src={seaweed} className = "Seaweed" alt = "logo"/>

        <img style={{ position: 'absolute',
          bottom: '10px', left:'200px' }} src={seaweed} className = "Seaweed" alt = "logo"/>
        
        <img style={{ position: 'absolute',
          bottom: '10px', right:'200px' }} src={seaweed} className = "Seaweed" alt = "logo"/>
        
        <img style={{ position: 'absolute',
          bottom: '10px', left:'300px' }} src={seaweed} className = "Seaweed" alt = "logo"/>

        <img style={{ position: 'absolute',
          bottom: '10px', right:'300px' }} src={seaweed} className = "Seaweed" alt = "logo"/>

        <img style={{ position: 'absolute',
          bottom: '10px', left:'400px' }} src={seaweed} className = "Seaweed" alt = "logo"/>

        <img style={{ position: 'absolute',
          bottom: '10px', right:'400px' }} src={seaweed} className = "Seaweed" alt = "logo"/>

        <img style={{ position: 'absolute',
          bottom: '10px', left:'500px' }} src={seaweed} className = "Seaweed" alt = "logo"/>

        <img style={{ position: 'absolute',
          bottom: '10px', right:'500px' }} src={seaweed} className = "Seaweed" alt = "logo"/>

        <img style={{ position: 'absolute',
          bottom: '10px', left:'600px' }} src={seaweed} className = "Seaweed" alt = "logo"/>

        <img style={{ position: 'absolute',
          bottom: '10px', right:'600px' }} src={seaweed} className = "Seaweed" alt = "logo"/>

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
