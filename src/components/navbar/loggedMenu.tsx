"use client"

import { logoutService } from "@/app/services/authServices";

//TODO: Tipado aca
export default function LoggedMenu({name}){
  const handleLogout = () => {
    return logoutService();
  }
  return (
    <>
      <a href="/profile"><p>Bienvenido, {name}</p></a>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </>
  )
}