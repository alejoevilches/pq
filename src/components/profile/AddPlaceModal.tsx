"use client";
import { getPlaceTypesService, getZonesService } from "@/app/services/placeServices";
import { useEffect, useState } from "react";
import { createPlaceService } from "@/app/services/placeServices";

interface ITipoLugar{
  tipoLugarId: number;
  nombre: string;
  estado: number;
}

interface IZona{
  zonaId: number;
  nombre: string
}

export default function AddPlaceModal() {
  const [placeTypes, setPlaceTypes] = useState<ITipoLugar[]>();
  const [zones, setZones] = useState<IZona[]>(); //TODO: Tipar esto bien y podria ser un solo estado
  useEffect(() => {
    getPlaceTypesService().then((data)=>setPlaceTypes(data));
    getZonesService().then((data)=>setZones(data))
  }, []);

  if (!placeTypes || !zones){
    return null;
  }

  //TODO: Tipado aca
  const handleAddPlace= async (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target);
    const formValues = {
      nombre: formData.get("nombre"),
      ubicacion: formData.get("ubicacion"),
      descripcion: formData.get("descripcion"),
      tipo_lugar: formData.get("tipo_lugar"),
      zona: formData.get("zona"),
    }
    await createPlaceService(formValues);
    
  }

  return (
    <form onSubmit={handleAddPlace} className="flex flex-col gap-4">
      <label htmlFor="nombre">Nombre del Lugar</label>
      <input type="text" name="nombre" id="nombre" />
      <label htmlFor="ubicacion">Ubicación</label>
      <input type="text" name="ubicacion" id="ubicacion" />
      <label htmlFor="descripcion">Descripción</label>
      <input type="text" name="descripcion" id="descripcion" />
      <label htmlFor="tipo_lugar">Tipo de Lugar</label>
      <select name="tipo_lugar" id="tipo_lugar">
        {placeTypes.map((t: ITipoLugar)=>{
          return (
            <option key={t.tipoLugarId} value={t.nombre}>{t.nombre}</option>
          )
        })}
      </select>
      <label htmlFor="zona">Zona</label>
      <select name="zona" id="zona">
        {zones.map((z: IZona)=>{
          return (
            <option key={z.zonaId} value={z.zonaId}>{z.nombre}</option>
          )
        })}
      </select>
      <input type="submit" value="Crear lugar" />
    </form>
  );
}