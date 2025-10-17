"use client"
interface Usuario{
  usuId: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  estado: boolean;
  rolId: number;
  clave: string;
  dni: string;
  lugarId: number;
}

import { useEffect, useState } from "react";
import { getCurrentUserService } from "../services/userServices"

export default function Profile(){
  const [user, setUser] = useState<Usuario>();

  useEffect(()=>{
    getCurrentUserService().then(data=>setUser(data))
  }, [])

  if (!user){
    return <p>Cargando...</p>
  }

  return(
    <section className="flex flex-col items-center m-4">
      <h1 className="text-4xl">Bienvenido a tu perfil</h1>
      <div className="bg-puroquilmes-100 p-20 justify-center rounded-lg mt-10">
        <h2>Informacion de contacto</h2>
        <div>
          <p>Nombre: {user.nombre}</p>
          <p>Apellido: {user.apellido}</p>
          <p>Email: {user.email}</p>
          <p>Telefono: {user.telefono}</p>
          <p>DNI: {user.dni}</p>
        </div>
      </div>
    </section>
  )
}