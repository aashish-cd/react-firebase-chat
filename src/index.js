import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Wrapper from './wrapper';
import IndexProvider from './context/index.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IndexProvider>
      <Wrapper>
        <App />
      </Wrapper>
    </IndexProvider>
  </React.StrictMode>
);
