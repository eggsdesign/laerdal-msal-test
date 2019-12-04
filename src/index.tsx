import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthenticationProvider } from './AuthenticationContext';

ReactDOM.render(
  <AuthenticationProvider>
    <App />
  </AuthenticationProvider>,
  document.getElementById('app'),
);
