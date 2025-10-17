"use client"

import { logoutService } from "@/app/services/authServices";

//TODO: Tipado aca
export default function LoggedMenu({name}){
  const handleLogout = () => {
    return logoutService();
  }
  return (
    <>
      <p>Bienvenido, {name}</p>
        <button onClick={handleLogout}>Cerrar sesión</button>
    </>
  )
}