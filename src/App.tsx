import React, { useEffect, useState } from 'react';
import './App.css';
import { HeaderComponent } from './components/HeaderComponent';
import { LoginComponent } from './components/LoginComponent';
import CollectRImage from './images/CollectRImage.png'
import IAuthState from './domain/IAuthState';

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
    <div className='wrapper'>
      <div className='main-container container'>
        <div className='child item'>
          <div className='left-side'>
            <div className='left-box'>
              <h1 className='box-text'>Box 1</h1>
            </div>
            <div className='left-box'>
              <h1 className='box-text'>Box 2</h1>
            </div>
            <div className='left-box'>
              <h1 className='box-text'>Box 3</h1>
            </div>
          </div>
          <div className="App">
            <header className="App-header">
              <img src={CollectRImage} className="CollectR-logo" alt="CollectR-logo" />
              <LoginComponent authState={authState}
                onAuthStateChanged={authStateChange}
              />
            </header>
          </div>
        </div>
        <div className='child item-center'>
          <div className='right-side'>
            <div className='right-row'>
              <div className='right-item'><h1 className='box-text'>Box 1</h1></div>
              <div className='right-item'><h1 className='box-text'>Box 2</h1></div>
              <div className='right-item'><h1 className='box-text'>Box 3</h1></div>
            </div>
            <div className='right-row'>
              <div className='right-item'><h1 className='box-text'>Box 4</h1></div>
              <div className='right-item'><h1 className='box-text'>Box 5</h1></div>
              <div className='right-item'><h1 className='box-text'>Box 6</h1></div>
            </div>



          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
