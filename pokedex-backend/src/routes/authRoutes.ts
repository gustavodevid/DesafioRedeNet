import { Router } from 'express';
import { register, login, getAuthenticatedUser } from '../controllers/authController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authenticateToken, getAuthenticatedUser); 

export default router;