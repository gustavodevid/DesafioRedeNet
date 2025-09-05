import { type Request, type Response, type NextFunction } from 'express';
import { prismaClient } from '../database/prismaClient.js';
import { z } from 'zod';

// Define um esquema de validação para o email
const emailSchema = z.string().email('Formato de e-mail inválido.');

export const checkEmailExists = async (req: Request, res: Response, next: NextFunction) => {
  const userEmail = req.body.email?.trim();

  try {
    // Valida o formato do e-mail usando Zod
    emailSchema.parse(userEmail);

    // Verifica se o e-mail já existe no banco de dados
    const userExists = await prismaClient.user.findUnique({
      where: { email: userEmail },
    });

    if (userExists) {
      return res.status(400).json({ error: 'E-mail já está em uso.' });
    }

    next();
  } catch (error) {
    // Captura o erro do Zod ou outros erros
    return res.status(400).json({ error: (error as Error).message });
  }
};