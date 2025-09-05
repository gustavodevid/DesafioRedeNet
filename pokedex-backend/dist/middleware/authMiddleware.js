/*
 * POKÉDEX CHALLENGE - Fullstack Application
 * Developed by: Gustavo David
 * GitHub: https://github.com/gustavodevid
 * LinkedIn: https://www.linkedin.com/in/devbardavid/
 * File: authMiddleware.ts
 * Description: Middleware to authenticate user requests using JWT.
 */
import {} from 'express';
import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Token não fornecido.' });
    }
    const secret = process.env.JWT_SECRET || 'your_secret_key';
    try {
        const decoded = jwt.verify(token, secret);
        req.userId = decoded.userId;
        next();
    }
    catch (error) {
        return res.status(403).json({ error: 'Token inválido.' });
    }
};
//# sourceMappingURL=authMiddleware.js.map