import {} from 'express';
import { listAllPokemons, addPokemonToPokedex, removePokemonFromPokedex, getPokedexByUserId, } from '../services/pokemonService.js';
export const listPokemons = async (req, res) => {
    try {
        const pokemons = await listAllPokemons();
        res.status(200).json(pokemons);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const addPokemon = async (req, res) => {
    const { pokemonCodeAPI } = req.body;
    const userId = req.userId;
    if (!userId || !pokemonCodeAPI) {
        return res.status(400).json({ error: 'Dados incompletos.' });
    }
    try {
        const pokemon = await addPokemonToPokedex(userId, pokemonCodeAPI);
        res.status(201).json({ message: 'Pokémon adicionado com sucesso.', pokemon });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const removePokemon = async (req, res) => {
    const { pokemonCodeAPI } = req.body;
    const userId = req.userId;
    if (!userId || !pokemonCodeAPI) {
        return res.status(400).json({ error: 'Dados incompletos.' });
    }
    try {
        const result = await removePokemonFromPokedex(userId, pokemonCodeAPI);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const getUserPokedex = async (req, res) => {
    const userId = req.userId;
    if (!userId) {
        return res.status(401).json({ error: 'Usuário não autenticado.' });
    }
    try {
        const userPokemons = await getPokedexByUserId(userId);
        res.status(200).json(userPokemons);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
};
//# sourceMappingURL=pokemonController.js.map