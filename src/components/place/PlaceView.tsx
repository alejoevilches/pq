"use client"

import getPlaceService from "@/app/services/placeServices"
import { useState, useEffect } from "react"

interface IPlaceView{
  id: number
}

interface IPlace{
  lugarId: number,
  nombre: string,
  ubicacion: string,
  zonaId: number,
  tipoLugarId: number,
  descripcion: string,
  estado: number,
  contadorDescuento: number,
}

export default function PlaceView({id}: IPlaceView){
  const [place, setPlace] = useState<IPlace>()

  useEffect(()=>{
    getPlaceService(id).then((data)=>setPlace(data))
  }, [id])

  if(!place){
    return "Cargando..."
  }

  return(
    <h1>{place.nombre}</h1>
  )
}