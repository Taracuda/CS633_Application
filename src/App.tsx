import React, { useEffect, useState } from 'react';
import './App.css';
import { LoginComponent } from './components/LoginComponent';
import IAuthState from './domain/IAuthState';
import CollectRImage from './images/CollectR.jpg'

function App() {
  const signedOut = 'signedOut';
  const [authState, setAuthState] = useState<IAuthState>({
    authState: '',
  });
  useEffect(() => {
    setAuthState({
      authState: signedOut,
    });
  }, []);
  const authStateChange = (authStateChange: string): void => {
    setAuthState({
      authState: authStateChange,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={CollectRImage} className="CollectR-logo" alt="CollectR-logo" />
         <LoginComponent authState={authState}
                  onAuthStateChanged={authStateChange}
                  />
      </header>
    </div>
  );
}

export default App;
