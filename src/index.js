import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from client
import App from './App';
import './i18n';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create root using createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
