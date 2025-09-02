"use client"

import { LogOut } from "lucide-react"
import "./Header.css"

interface HeaderProps {
  username: string
}

export default function Header({ username }: HeaderProps) {
  const handleLogout = () => {
    // Implementar lógica de logout
    console.log("Logout clicked")
  }

  return (
    <header className="header">
      <h1 className="header-title">POKÉDEX | {username}</h1>
      <button className="logout-btn" onClick={handleLogout}>
        <LogOut size={20} />
      </button>
    </header>
  )
}
