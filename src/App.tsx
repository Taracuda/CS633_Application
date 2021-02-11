import { Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Routes } from './components/routes/Routes';

function App() {
  useEffect(() => {
    Auth.signOut();
  }, []);

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
