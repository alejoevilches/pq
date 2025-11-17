"use client"
import { useModalStore } from "@/app/store/modalStore";
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
import { deleteReservationService } from '@/app/services/tripServices'
import { ToastContainer, toast } from 'react-toastify'

export default function Profile(){
  const [user, setUser] = useState<Usuario>();
  const { setOpenModal } = useModalStore();

  useEffect(()=>{
    getCurrentUserService().then(data=>setUser(data))
  }, [])

  if (!user){
    return <p>Cargando...</p>
  }

  return(
    <section className="flex flex-col items-center m-4">
      <h1 className="text-4xl">Bienvenido a tu perfil</h1>
      <div className="bg-puroquilmes-100 p-20 justify-center rounded-lg my-10">
        <h2>Informacion de contacto</h2>
        <div>
          <p>Nombre: {user.nombre}</p>
          <p>Apellido: {user.apellido}</p>
          <p>Email: {user.email}</p>
          <p>Telefono: {user.telefono}</p>
          <p>DNI: {user.dni}</p>
        </div>
      </div>
      <ToastContainer />
      {user.reservation && (
        <div className="bg-puroquilmes-100 p-20 justify-center rounded-lg my-10 w-full max-w-2xl">
          <h2>Tenés un viaje reservado</h2>
          <div>
            <p>Número de viaje: {user.reservation.viaje?.nroViaje ?? user.reservation.viajeId}</p>
            <p>Fecha: {user.reservation.viaje?.fecha ?? 'N/A'}</p>
            <p>Lugares reservados: {user.reservation.cantidadPasajeros}</p>
            <p>Lugares disponibles ahora: {user.reservation.viaje?.lugaresDisponibles ?? 'N/A'}</p>
          </div>
          <div className="mt-4">
            <button
              className="bg-red-500 text-white rounded-2xl p-3"
              onClick={async ()=>{
                if(!confirm('¿Eliminar reserva?')) return;
                const res = await deleteReservationService({ pasajeroId: user.reservation.pasajeroId });
                if (res && res.ok) {
                  toast.success(res.data?.message || 'Reserva eliminada');
                  // remove reservation locally
                  setUser({ ...user, reservation: undefined } as any);
                } else {
                  toast.error(res.data?.error || res.data?.message || 'No se pudo eliminar la reserva');
                }
              }}
            >Eliminar viaje</button>
          </div>
        </div>
      )}
      <div className="flex gap-4">
        <a href="/">
          <button className="bg-puroquilmes-300 rounded-2xl p-4">Volver al inicio</button>
        </a>
        <button onClick={()=>setOpenModal("addPlace")} className="bg-puroquilmes-300 rounded-2xl p-4">Agregar lugar</button>
        <button onClick={()=>setOpenModal("deletePlace")} className="bg-puroquilmes-300 rounded-2xl p-4">Eliminar lugar</button>
        <a href="/admin/trips">
          <button className="bg-puroquilmes-300 rounded-2xl p-4">Gestor de viajes</button>
        </a>
      </div>
    </section>
  )
}