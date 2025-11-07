"use client"

import { getTripsService, deleteTripService } from "@/app/services/tripServices";
import { useState, useEffect } from "react";

interface ITrip{
  viajeId: number,
  nroViaje: number,
  busId: number,
  lugaresDisponibles: number,
  fecha: string
}

export default function TripsTable(){
  const [trips, setTrips]=useState<ITrip[]>();

  useEffect(()=>{
    getTripsService().then((data)=>setTrips(data))
  }, [])

  if(!trips){
    return null
  }

  const handleDeleteTrip = async (trip: Number) =>{
    await deleteTripService(trip);
  }

  return (
    <div className="w-3/4 mx-auto overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead className="bg-gray-300">
          <tr>
            <th className="px-4 py-2">ID de Viaje</th>
            <th className="px-4 py-2">Número de Viaje</th>
            <th className="px-4 py-2">ID del Bus</th>
            <th className="px-4 py-2">Lugares Disponibles</th>
            <th className="px-4 py-2">Fecha del Viaje</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip) => (
            <tr
              key={trip.viajeId}
              className="even:bg-puroquilmes-200 odd:bg-white"
            >
              <td className="px-4 py-2">{trip.viajeId}</td>
              <td className="px-4 py-2">{trip.nroViaje}</td>
              <td className="px-4 py-2">{trip.busId}</td>
              <td className="px-4 py-2">{trip.lugaresDisponibles}</td>
              <td className="px-4 py-2">{trip.fecha}</td>
              <td onClick={()=>handleDeleteTrip(trip.viajeId)}>Eliminar</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}