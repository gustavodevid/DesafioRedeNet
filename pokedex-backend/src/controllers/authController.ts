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
import { z, ZodError } from 'zod';

// Define o esquema de validação para o registro
const registerSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres.'),
  email: z.string().email('Formato de e-mail inválido.'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.'),
});
 
// Define o esquema de validação para o login
const loginSchema = z.object({
  email: z.string().email('Formato de e-mail inválido.'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.'),
});


interface AuthRequest extends Request {
  userId?: number;
}

// função para registrar um usuário
export const register = async (req: Request, res: Response) => {
   try {
    // Valida os dados da requisição com o esquema
    const { name, email, password } = registerSchema.parse(req.body);

    const user = await registerUser(name, email, password);
    res.status(201).json({ message: 'Usuário registrado com sucesso!', user });
  } catch (error) {
    if (error instanceof ZodError) {
      // Retorna uma mensagem de erro mais detalhada do Zod
      res.status(400).json({ error: error.issues[0]?.message ?? 'Dados de entrada inválidos.' });
    } else {
      res.status(400).json({ error: (error as Error).message });
    }
  }

};

export const login = async (req: Request, res: Response) => {
  try {
    // Valida os dados da requisição com o esquema
    const { email, password } = loginSchema.parse(req.body);

    const { user, token } = await loginUser(email, password);
    res.status(200).json({ message: 'Login bem-sucedido!', user, token });
  } catch (error) {
    if (error instanceof ZodError) {
      // Retorna uma mensagem de erro mais detalhada do Zod
      res.status(400).json({ error: error.issues[0]?.message ?? 'Dados de entrada inválidos.' });
    } else {
      res.status(401).json({ error: (error as Error).message });
    }
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