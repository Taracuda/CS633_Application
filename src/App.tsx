import { Auth } from 'aws-amplify';
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import { NavbarComponent } from './components/NavbarComponent';
import { Routes } from './components/routes/Routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <NavbarComponent/>
          <Routes />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
