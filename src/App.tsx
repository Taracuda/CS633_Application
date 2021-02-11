import React, { useEffect, useState } from 'react';
import './App.css';
import { HeaderComponent } from './components/HeaderComponent';
import { LoginComponent } from './components/LoginComponent';
import { PageLayoutComponent } from './components/PageLayoutComponent';
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
    //For now, this PageLayoutComponent tag is allowing you to see the page you're working on (PageLayoutComponent.tsx)
    //instead of the initial landing page. Let me know before you make a PR and we'll revert this back.
    //The HeaderComponent tag contains the CollectR image (HeaderComponent.tsx)
    // <PageLayoutComponent />
          <div className="App">
              <HeaderComponent />
              <LoginComponent authState={authState}
                onAuthStateChanged={authStateChange}
              />
          </div>
  );
}

export default App;
