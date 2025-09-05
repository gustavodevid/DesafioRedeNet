/*
 * POKÉDEX CHALLENGE - Fullstack Application
 * Developed by: Gustavo David
 * GitHub: https://github.com/gustavodevid
 * LinkedIn: https://www.linkedin.com/in/devbardavid/
 * File: authRoutes.ts
 * Description: Routes logic for auth and data retrieval.
 */
import { Router } from 'express';
import { register, login, getAuthenticatedUser } from '../controllers/authController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { checkEmailExists } from '../middleware/checkEmailExists.js';

const router = Router();

router.post('/register', checkEmailExists, register); // rota de registro
router.post('/login', login); // rota de login
router.get('/me', authenticateToken, getAuthenticatedUser); // rota para pegar os dados do usuário logado 

export default router;