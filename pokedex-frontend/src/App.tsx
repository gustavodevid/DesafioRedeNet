import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importe as páginas que vamos criar
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Pokedex from './pages/Pokedex';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas que vamos criar */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/pokedex" element={<Pokedex />} /> */}
        <Route path="/" element={<h1>Bem-vindo!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;