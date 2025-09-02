import { type Request, type Response } from 'express';
import { 
  listAllPokemons,
  addPokemonToPokedex,
  removePokemonFromPokedex,
} from '../services/pokemonService.js';

interface AuthRequest extends Request {
  userId?: number;
}

export const listPokemons = async (req: Request, res: Response) => {
  try {
    const pokemons = await listAllPokemons();
    res.status(200).json(pokemons);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const addPokemon = async (req: AuthRequest, res: Response) => {
  const { pokemonCodeAPI } = req.body;
  const userId = req.userId;

  if (!userId || !pokemonCodeAPI) {
    return res.status(400).json({ error: 'Dados incompletos.' });
  }

  try {
    const pokemon = await addPokemonToPokedex(userId, pokemonCodeAPI);
    res.status(201).json({ message: 'Pokémon adicionado com sucesso.', pokemon });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const removePokemon = async (req: AuthRequest, res: Response) => {
  const { pokemonCodeAPI } = req.body;
  const userId = req.userId;

  if (!userId || !pokemonCodeAPI) {
    return res.status(400).json({ error: 'Dados incompletos.' });
  }

  try {
    const result = await removePokemonFromPokedex(userId, pokemonCodeAPI);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
