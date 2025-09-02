import { Router } from 'express';
import { listPokemons, addPokemon, removePokemon, getUserPokedex } from '../controllers/pokemonController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/all', listPokemons);
router.get('/my-pokedex', authenticateToken, getUserPokedex);
router.post('/add', authenticateToken, addPokemon);
router.delete('/remove', authenticateToken, removePokemon);

export default router;