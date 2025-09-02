import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePokedex } from '../hooks/usePokedex';
import PokemonCard from '../components/PokemonCard';
import '../styles/Pokedex.css';

const Pokedex = () => {
  const navigate = useNavigate();
  const { pokemons, userPokedex, loading, error, addPokemon, removePokemon } = usePokedex();

  if (loading) {
    return <div>Carregando Pokémons...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const isCaught = (codeAPI: number) => {
    return userPokedex.some(p => p.codeAPI === codeAPI);
  };

  return (
    <div>
      <header className="pokedex-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Minha Pokédex</h2>
        <button onClick={handleLogout}>Sair</button>
      </header>
      <div className="pokemon-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.codeAPI}
            pokemon={pokemon}
            isCaught={isCaught(pokemon.codeAPI)}
            onAdd={addPokemon}
            onRemove={removePokemon}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;