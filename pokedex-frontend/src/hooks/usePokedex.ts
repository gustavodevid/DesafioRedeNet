"use client"

import { useState, useEffect } from "react"
import api from "../api/api"

interface Pokemon {
  id?: number
  codeAPI: number
  name: string
}

export const usePokedex = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [userPokedex, setUserPokedex] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPokemons = async () => {
    try {
      const allPokemonsResponse = await api.get("/pokemon/all")
      const userPokedexResponse = await api.get("/pokemon/my-pokedex")

      const allPokemons = allPokemonsResponse.data.map((p: any, index: number) => ({
        codeAPI: index + 1,
        name: p.name,
      }))

      const userPokemons = userPokedexResponse.data.map((p: any) => {
        const pokemonData = allPokemons.find((pokemon: Pokemon) => pokemon.codeAPI === p.codeAPI)
        return {
          id: p.id,
          codeAPI: p.codeAPI,
          name: pokemonData?.name || `Pokémon ${p.codeAPI}`, // Fallback name if not found
        }
      })

      setPokemons(allPokemons)
      setUserPokedex(userPokemons)
    } catch (err: any) {
      setError(err.response?.data?.error || "Erro ao carregar os Pokémons.")
    } finally {
      setLoading(false)
    }
  }

  const addPokemon = async (pokemon: Pokemon | number) => {
    try {
      const pokemonCodeAPI = typeof pokemon === "object" ? pokemon.codeAPI : pokemon
      await api.post("/pokemon/add", { pokemonCodeAPI })
      await fetchPokemons() // Atualiza a lista após a adição
    } catch (err: any) {
      setError(err.response?.data?.error || "Erro ao adicionar Pokémon.")
    }
  }

  const removePokemon = async (pokemon: Pokemon | number) => {
    try {
      const pokemonCodeAPI = typeof pokemon === "object" ? pokemon.codeAPI : pokemon
      await api.delete("/pokemon/remove", { data: { pokemonCodeAPI } })
      await fetchPokemons() // Atualiza a lista após a remoção
    } catch (err: any) {
      setError(err.response?.data?.error || "Erro ao remover Pokémon.")
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return { pokemons, userPokedex, loading, error, addPokemon, removePokemon }
}
