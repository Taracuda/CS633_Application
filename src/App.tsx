import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import { Routes } from './components/routes/Routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
