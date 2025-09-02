import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import '../styles/Auth.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', { name, email, password });
      alert('Registro bem-sucedido! Faça login para continuar.');
      navigate('/login');
    } catch (error: any) {
      alert('Erro no registro: ' + error.response.data.error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Cadastro</h2>
      <form className="auth-form" onSubmit={handleRegister}>
        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Cadastrar</button>
      </form>
      <p>Já tem uma conta? <a href="/login">Entre aqui</a></p>
    </div>
  );
};

export default Register;