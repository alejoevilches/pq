"use client"
import { useState, useEffect } from "react"
import { getTripsService } from "@/app/services/tripServices"

interface ITrip{
  viajeId: number,
  nroViaje: number,
  busId: number,
  lugaresDisponibles: number,
  fecha: string
}

export default function AddPassengerModal(){
  const [trips, setTrips]=useState<ITrip[]>();
  
  useEffect(()=>{
      getTripsService().then((data)=>setTrips(data))
    }, [])
  

  const handleAddPassenger=async(e)=>{
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = {
      trip: formData.get("trip"),
      passengers: formData.get("passengers")
    }
    await addPassengerService(data);
  }

  if(!trips){
    return null
  }

  return(
    <form onSubmit={handleAddPassenger} className="flex flex-col gap-4">
      <label htmlFor="trip">Viaje</label>
      <select name="trip" id="trip">
        {trips.map((t: ITrip)=>{
          return (
            <option key={t.viajeId} value={t.viajeId}>{t.nroViaje}</option>
          )
        })}
      </select>
      <label htmlFor="cantidad_lugares">Cantidad de Pasajeros</label>
      <input type="number" name="passengers" id="passengers" min={0} />
      <input type="submit" value="Agregar" />
    </form>
  )
}
