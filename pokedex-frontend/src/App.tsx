
/*
 * POKÉDEX CHALLENGE - Fullstack Application
 * Developed by: Gustavo David
 * GitHub: https://github.com/gustavodevid
 * LinkedIn: https://www.linkedin.com/in/devbardavid/
 * File: App.tsx
 * Description: Main component handling the application's routing.
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Pokedex from './pages/Pokedex';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;