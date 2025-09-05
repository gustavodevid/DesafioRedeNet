/*
 * POKÉDEX CHALLENGE - Fullstack Application
 * Developed by: Gustavo David
 * GitHub: https://github.com/gustavodevid
 * LinkedIn: https://www.linkedin.com/in/devbardavid/
 * File: pokemonRoutes.ts
 * Description: Routes logic for pokemon and data retrieval.
 */

import { Router } from 'express';
import { listPokemons, addPokemon, removePokemon, getUserPokedex } from '../controllers/pokemonController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/all', listPokemons);
router.get('/my-pokedex', authenticateToken, getUserPokedex);
router.post('/add', authenticateToken, addPokemon);
router.delete('/remove', authenticateToken, removePokemon);

export default router;