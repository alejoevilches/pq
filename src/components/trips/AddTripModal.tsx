import { useState, useEffect } from "react";
import { getBusesService } from "@/app/services/busServices";
import { addTripService } from "@/app/services/tripServices";

interface IBus{
  busId: number,
  patente: string,
  nombre: string,
  estado: number
}

export default function AddTripModal(){
  const [buses, setBuses] = useState<IBus[]>();

  useEffect(()=>{
    getBusesService().then((data)=>setBuses(data))
  }, [])

  if(!buses){
    return null;
  }

  //TODO: Tipado aca
  const handleAddTrip = async (e) =>{
    e.preventDefault();
    const formData=new FormData(e.target);
    const data = {
      nroViaje: formData.get("nro_viaje"),
      busId: formData.get("bus"),
      lugaresDisponibles: formData.get("cantidad_lugares"),
      fecha: formData.get("fecha")
    }
    await addTripService(data);
  }

  return(
    <form onSubmit={handleAddTrip} className="flex flex-col gap-4">
      <label htmlFor="nro_viaje">Numero de Viaje</label>
      <input type="text" name="nro_viaje" id="nro_viaje" />
      <label htmlFor="bus">Bus</label>
      <select name="bus" id="bus">
        {buses.map((b: IBus)=>{
          return (
            <option key={b.busId} value={b.busId}>{b.nombre}</option>
          )
        })}
      </select>
      <label htmlFor="cantidad_lugares">Cantidad de Lugares</label>
      <input type="number" name="cantidad_lugares" id="cantidad_lugares" />
      <label htmlFor="fecha">Fecha</label>
      <input type="date" name="fecha" id="fecha" />
      <input type="submit" value="Crear lugar" />
    </form>
  )
}