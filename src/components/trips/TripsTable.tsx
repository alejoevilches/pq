"use client"

import { getTripsService } from "@/app/services/tripServices";
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

  return(
    <table className="w-full border-collapse">
      <thead>
        <th>ID de Viaje</th>
        <th>Número de Viaje</th>
        <th>ID del Bus</th>
        <th>Lugares Disponibles</th>
        <th>Fecha del Viaje</th>
      </thead>
      <tbody>
        {trips.map((trip)=>(
          <tr key={trip.viajeId}>
            <td>{trip.viajeId}</td>
            <td>{trip.nroViaje}</td>
            <td>{trip.busId}</td>
            <td>{trip.lugaresDisponibles}</td>
            <td>{trip.fecha}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}