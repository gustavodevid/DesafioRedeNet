/*
 * POKÉDEX CHALLENGE - Fullstack Application
 * Developed by: Gustavo David
 * GitHub: https://github.com/gustavodevid
 * LinkedIn: https://www.linkedin.com/in/devbardavid/
 * File: authMiddleware.ts
 * Description: Middleware to authenticate user requests using JWT.
 */

import { type Request, type Response, type NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  userId?: number;
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

  const secret = process.env.JWT_SECRET || 'your_secret_key';

  try {
    const decoded = jwt.verify(token, secret) as { userId: number };
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Token inválido.' });
  }
};