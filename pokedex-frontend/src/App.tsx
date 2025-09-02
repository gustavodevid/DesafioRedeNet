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