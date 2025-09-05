/*
 * POKÉDEX CHALLENGE - Fullstack Application
 * Developed by: Gustavo David
 * GitHub: https://github.com/gustavodevid
 * LinkedIn: https://www.linkedin.com/in/devbardavid/
 * File: authController.ts
 * Description: Controllers for user authentication (register and login).
 */

import { type Request, type Response } from 'express';
import { registerUser, loginUser, getUserById } from '../services/authService.js';

interface AuthRequest extends Request {
  userId?: number;
}

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const user = await registerUser(name, email, password);
    res.status(201).json({ message: 'Usuário registrado com sucesso!', user });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const { user, token } = await loginUser(email, password);
    res.status(200).json({ message: 'Login bem-sucedido!', user, token });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
};

export const getAuthenticatedUser = async (req: AuthRequest, res: Response) => {
  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({ error: 'Usuário não autenticado.' });
  }

  try {
    const user = await getUserById(userId);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};