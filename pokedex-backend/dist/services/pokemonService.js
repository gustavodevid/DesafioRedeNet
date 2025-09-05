import axios from 'axios';
import { prismaClient } from '../database/prismaClient.js';
const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';
export const listAllPokemons = async () => {
    try {
        const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon?limit=151`);
        return response.data.results;
    }
    catch (error) {
        console.error('Erro ao buscar Pokémons da PokéAPI:', error);
        throw new Error('Falha ao buscar Pokémons.');
    }
};
export const addPokemonToPokedex = async (userId, pokemonCodeAPI) => {
    const user = await prismaClient.user.findUnique({
        where: { id: userId },
        include: { pokedex: true },
    });
    if (!user || !user.pokedex) {
        throw new Error('Pokédex do usuário não encontrada.');
    }
    const pokemonExists = await prismaClient.pokemon.findFirst({
        where: {
            pokedexId: user.pokedex.id,
            codeAPI: pokemonCodeAPI,
        },
    });
    if (pokemonExists) {
        throw new Error('Este Pokémon já está na sua Pokédex.');
    }
    const pokemon = await prismaClient.pokemon.create({
        data: {
            codeAPI: pokemonCodeAPI,
            pokedex: { connect: { id: user.pokedex.id } },
        },
    });
    return pokemon;
};
export const removePokemonFromPokedex = async (userId, pokemonCodeAPI) => {
    const user = await prismaClient.user.findUnique({
        where: { id: userId },
        include: { pokedex: true },
    });
    if (!user || !user.pokedex) {
        throw new Error('Pokédex do usuário não encontrada.');
    }
    const pokemon = await prismaClient.pokemon.findFirst({
        where: {
            pokedexId: user.pokedex.id,
            codeAPI: pokemonCodeAPI,
        },
    });
    if (!pokemon) {
        throw new Error('Pokémon não encontrado na sua Pokédex.');
    }
    await prismaClient.pokemon.delete({
        where: { id: pokemon.id },
    });
    return { message: 'Pokémon removido com sucesso.' };
};
export const getPokedexByUserId = async (userId) => {
    const userPokedex = await prismaClient.pokedex.findUnique({
        where: { userId },
        include: {
            pokemons: true,
        },
    });
    if (!userPokedex) {
        throw new Error('Pokédex do usuário não encontrada.');
    }
    return userPokedex.pokemons;
};
//# sourceMappingURL=pokemonService.js.map