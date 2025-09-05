export declare const listAllPokemons: () => Promise<any>;
export declare const addPokemonToPokedex: (userId: number, pokemonCodeAPI: number) => Promise<{
    id: number;
    codeAPI: number;
    pokedexId: number;
}>;
export declare const removePokemonFromPokedex: (userId: number, pokemonCodeAPI: number) => Promise<{
    message: string;
}>;
export declare const getPokedexByUserId: (userId: number) => Promise<{
    id: number;
    codeAPI: number;
    pokedexId: number;
}[]>;
//# sourceMappingURL=pokemonService.d.ts.map