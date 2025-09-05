
/*
 * POKÉDEX CHALLENGE - Fullstack Application
 * Developed by: Gustavo David
 * GitHub: https://github.com/gustavodevid
 * LinkedIn: https://www.linkedin.com/in/devbardavid/
 * File: main.tsx
 * Description: The application's entry point, rendering the root component.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);