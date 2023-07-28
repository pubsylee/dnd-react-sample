import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Aos from 'aos';
import 'aos/dist/aos.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

Aos.init();