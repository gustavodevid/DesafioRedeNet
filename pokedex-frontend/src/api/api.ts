/*
 * POKÉDEX CHALLENGE - Fullstack Application
 * Developed by: Gustavo David
 * GitHub: https://github.com/gustavodevid
 * LinkedIn: https://www.linkedin.com/in/devbardavid/
 * File: api.ts
 * Description: Axios instance for communicating with the backend API.
 */

import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; 

const api = axios.create({
  baseURL: `${API_URL}/api`,
});



api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;