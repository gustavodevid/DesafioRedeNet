"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { usePokedex } from "../hooks/usePokedex"
import { useAuth } from "../hooks/useAuth"
import PokemonCard from "../components/PokemonCard"
import "../styles/Pokedex.css"

const Pokedex = () => {
  const navigate = useNavigate()
  const { user, loading: authLoading } = useAuth()
  const { pokemons, userPokedex, loading, error, addPokemon, removePokemon } = usePokedex()
  const [searchTerm, setSearchTerm] = useState("")

  if (loading || authLoading) {
    return (
      <div className="pokedex-container">
        <div className="loading-screen">
          <div className="pokeball-loader"></div>
          <p>Carregando Pokémons...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="pokedex-container">
        <div className="error-screen">
          <p>Erro: {error}</p>
        </div>
      </div>
    )
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  const isCaught = (codeAPI: number) => {
    return userPokedex.some((p) => p.codeAPI === codeAPI)
  }

  const filteredPokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="pokedex-container">
      <header className="pokedex-header">
        <div className="header-left">
          <h1 className="pokedex-title">POKÉDEX</h1>
          <span className="user-name">| {user?.name || "USUÁRIO"}</span>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16,17 21,12 16,7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </button>
      </header>

      <div className="pokedex-main">
        <div className="main-content">
          <div className="search-container">
            <div className="search-input-wrapper">
              <svg
                className="search-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                className="search-input"
                placeholder="PROCURE POR UM POKÉMON..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="pokemon-grid">
            {filteredPokemons.slice(0, 6).map((pokemon) => (
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

        <aside className="pokedex-sidebar">
          <div className="sidebar-header">
            <h3>POKÉLIST</h3>
          </div>
          <div className="sidebar-content">
            {userPokedex.length === 0 ? (
              <p className="empty-message">SUA POKÉLIST ESTÁ VAZIA</p>
            ) : (
              <div className="caught-pokemon-list">
                {userPokedex.map((pokemon) => (
                  <div key={pokemon.codeAPI} className="caught-pokemon-item">
                    <span>{pokemon.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Pokedex
