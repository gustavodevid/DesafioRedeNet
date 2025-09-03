"use client"

import { useState, useEffect } from "react"
import api from "../api/api" 

interface User {
  id: number
  name: string
  email: string
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token")
        if (!token) {
          setLoading(false)
          return
        }

      
        const response = await api.get("/auth/me")
        const userData = response.data
        
        setUser(userData)
      } catch (error) {
        console.error("Erro ao carregar dados do usuário:", error)
        localStorage.removeItem("token")
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
  }

  return { user, loading, logout }
}