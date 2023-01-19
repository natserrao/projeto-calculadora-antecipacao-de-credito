import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/global';
import { ValueProviders } from './contexts/ValueContext';
import { ModalProviders } from './contexts/ModalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
          <ModalProviders>
          <ValueProviders>
            <GlobalStyle/>
            <App />
            </ValueProviders>
          </ModalProviders>
  </React.StrictMode>
);

