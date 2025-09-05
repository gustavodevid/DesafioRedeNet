/*
 * POKÉDEX CHALLENGE - Fullstack Application
 * Developed by: Gustavo David
 * GitHub: https://github.com/gustavodevid
 * LinkedIn: https://www.linkedin.com/in/devbardavid/
 * File: PokemonCard.tsx
 * Description: Reusable component to display a single Pokémon.
 */

import type React from "react"

interface Pokemon {
  codeAPI: number
  name: string
  image?: string
}

interface PokemonCardProps {
  pokemon: Pokemon
  isCaught: boolean
  onAdd: (pokemon: Pokemon) => void
  onRemove: (codeAPI: number) => void
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, isCaught, onAdd, onRemove }) => {
  
  const handleToggle = () => {
    if (isCaught) {
      onRemove(pokemon.codeAPI)
    } else {
      onAdd(pokemon)
    }
  }

   const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.codeAPI}.png`

  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img 
          src={imageUrl} 
          alt={pokemon.name} 
          className="pokemon-image" 
        />
      </div>

      <div className="pokemon-info">
        <p className="pokemon-data-label">DADOS DO POKÉMON</p>
        <p className="pokemon-name">{pokemon.name}</p>
      </div>

      <div className="pokemon-actions">
        <button
          className={`action-btn ${isCaught ? "remove-btn" : "add-btn"}`}
          onClick={handleToggle}
          title={isCaught ? "Remover da Pokédex" : "Adicionar à Pokédex"}
        >
          {isCaught ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )}
        </button>

        <div className="status-indicators">
          <div className={`indicator green ${isCaught ? "active" : ""}`}></div>
          <div className={`indicator red ${!isCaught ? "active" : ""}`}></div>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
