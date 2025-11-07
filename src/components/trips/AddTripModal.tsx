import { useState, useEffect } from "react";

export default function AddTripModal(){
  const [buses, setBuses] = useState();

  useEffect(()=>{
    getBusesService().then((data)=>setBuses(data))
  })

  if(!buses){
    return null;
  }


  const handleAddTrip = async (e) =>{
    e.preventDefault();
    const formData=new FormData(e.target);
    const data = {
      nroViaje: formData.get("nroViaje"),
      bus: formData.get("bus"),
      description: formData.get("descripcion"),
      cantidadLugares: formData.get("cantidad_lugares"),
      fecha: formData.get("fecha")
    }
    await addTripService(data);
  }

  return(
    <form onSubmit={handleAddTrip} className="flex flex-col gap-4">
      <label htmlFor="nroViaje">Numero de Viaje</label>
      <input type="text" name="nroViaje" id="nroViaje" />
      <label htmlFor="bus">Bus</label>
      <select name="bus" id="bus">
        {buses.map((b: IBus)=>{
          return (
            <option key={z.zonaId} value={z.zonaId}>{z.nombre}</option>
          )
        })}
      </select>
      <label htmlFor="descripcion">Descripción</label>
      <input type="text" name="descripcion" id="descripcion" />
      <label htmlFor="cantidad_lugares">Cantidad de Lugares</label>
      <input type="number" name="cantidad_lugares" id="cantidad_lugares" />
      <label htmlFor="fecha">Fecha</label>
      <input type="date" name="fecha" id="fecha" />
      <input type="submit" value="Crear lugar" />
    </form>
  )
}