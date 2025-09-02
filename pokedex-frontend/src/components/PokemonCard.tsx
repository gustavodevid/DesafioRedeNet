import React from 'react';

interface PokemonCardProps {
  pokemon: {
    codeAPI: number;
    name: string;
  };
  isCaught: boolean;
  onAdd: (code: number) => void;
  onRemove: (code: number) => void;
}

const PokemonCard = ({ pokemon, isCaught, onAdd, onRemove }: PokemonCardProps) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '5px', borderRadius: '5px' }}>
      <h4>{pokemon.name}</h4>
      <p>#{pokemon.codeAPI}</p>
      {isCaught ? (
        <button onClick={() => onRemove(pokemon.codeAPI)}>Remover da Pokédex</button>
      ) : (
        <button onClick={() => onAdd(pokemon.codeAPI)}>Adicionar à Pokédex</button>
      )}
    </div>
  );
};

export default PokemonCard;