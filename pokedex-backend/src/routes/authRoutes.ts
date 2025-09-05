// Author Gustavo David
import { Router } from 'express';
import { register, login, getAuthenticatedUser } from '../controllers/authController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/register', register); // rota de registro
router.post('/login', login); // rota de login
router.get('/me', authenticateToken, getAuthenticatedUser); // rota para pegar os dados do usuário logado 

export default router;