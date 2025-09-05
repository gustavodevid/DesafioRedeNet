/*
 * POKÉDEX CHALLENGE - Fullstack Application
 * Developed by: Gustavo David
 * GitHub: https://github.com/gustavodevid
 * LinkedIn: https://www.linkedin.com/in/devbardavid/
 * File: api.ts
 * Description: Axios instance for communicating with the backend API.
 */

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;