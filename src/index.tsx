import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth } from 'aws-amplify';
import _authenticationStorage from './AuthenticationStorage';

const config = {
  Auth: {
    mandatorySignIn: true,
    region: 'us-east-2',
    userPoolWebClientId: '736ku2v8dpf2nfdq24cbin9nf5',
    userPoolId: 'us-east-2_jlhQxNdVU',
    storage: _authenticationStorage,
  },
};
Auth.configure(config);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
