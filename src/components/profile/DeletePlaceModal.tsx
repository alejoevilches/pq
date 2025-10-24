import { useEffect, useState } from "react";
import { getPlacesService, deletePlaceService } from "@/app/services/placeServices";

interface ILugar{
  lugarId: number,
  nombre: string,
  ubicacion: string,
  zonaId: number,
  tipoLugarId: number,
  descripcion: string,
  estado: number,
  contadorDescuento: number
}

export default function DeletePlaceModal(){
  const [places, setPlaces]=useState<ILugar[]>();
  useEffect(()=>{
    getPlacesService().then((data)=>setPlaces(data));
  }, []);

  if(!places){
    return "Cargando..."
  }

  //TODO: Tipado aca
  const handleDeletePlace=async (e)=>{
    e.preventDefault()
    const data=new FormData(e.target)
    const place = data.get("local");
    await deletePlaceService(place);
  }

  return(
    <form onSubmit={handleDeletePlace}>
      <select name="local" id="local">
        {places.map(p=>{
          return (
            <option key={p.lugarId} value={p.lugarId}>{p.nombre}</option>
          )
        })}
      </select>
      <input type="submit" value="Eliminar" />
    </form>
  )
}