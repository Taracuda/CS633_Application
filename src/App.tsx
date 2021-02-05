import React from 'react';
import './App.css';
import CollectRImage from './images/CollectR.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={CollectRImage} className="CollectR-logo" alt="CollectR-logo" />
        <p>
          Welcome to our term project!
        </p>
        <a
          className="App-link"
          href="https://www.collectorsuniverse.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out Collectors Universe!!!
        </a>
      </header>
    </div>
  );
}

export default App;
