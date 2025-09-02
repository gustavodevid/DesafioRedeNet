import { type Request, type Response } from 'express';
import { registerUser, loginUser } from '../services/authService.js';

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