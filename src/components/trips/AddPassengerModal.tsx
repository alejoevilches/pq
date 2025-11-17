"use client"
import { useState, useEffect } from "react"
import { getTripsService, addPassengerService } from "@/app/services/tripServices"
import { toast } from 'react-toastify'
import { useModalStore } from '@/app/store/modalStore'

interface ITrip{
  viajeId: number,
  nroViaje: number,
  busId: number,
  lugaresDisponibles: number,
  fecha: string
}

export default function AddPassengerModal(){
  const [trips, setTrips]=useState<ITrip[]>();
  const [isLoading, setIsLoading] = useState(false);
  const { closeModal } = useModalStore();
  
  useEffect(()=>{
      getTripsService().then((data)=>setTrips(data))
    }, [])
  

  const handleAddPassenger=async(e)=>{
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = {
      trip: Number(formData.get("trip")),
      passengers: Number(formData.get("passengers"))
    }

    try{
      setIsLoading(true);
      const res = await addPassengerService(data);
      if (res && res.ok) {
        toast.success(res.data?.message || 'Pasajero agregado correctamente');
        closeModal();
      } else {
        toast.error(res.data?.error || res.data?.message || 'No se pudo agregar el pasajero');
      }
    } catch (e) {
      console.error(e);
      toast.error('Error al agregar pasajero');
    } finally {
      setIsLoading(false);
    }
  }

  if(!trips){
    return null
  }

  return(
    <form onSubmit={handleAddPassenger} className="flex flex-col gap-4">
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}

      <label htmlFor="trip">Viaje</label>
      <select name="trip" id="trip" disabled={isLoading}>
        {trips.map((t: ITrip)=>{
          return (
            <option key={t.viajeId} value={t.viajeId}>{t.nroViaje} - {t.fecha} ({t.lugaresDisponibles} disponibles)</option>
          )
        })}
      </select>
      <label htmlFor="cantidad_lugares">Cantidad de Pasajeros</label>
      <input type="number" name="passengers" id="passengers" min={1} disabled={isLoading} />
      <input type="submit" value="Agregar" disabled={isLoading} />
    </form>
  )
}
