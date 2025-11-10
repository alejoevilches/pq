"use client"

import TripsTable from "@/components/trips/TripsTable"
import { useModalStore } from "../../store/modalStore"

export default function TripsPage(){
  const {setOpenModal} = useModalStore();

  return(
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-4xl mt-26 pb-4">Bienvenido a la pagina de gestion de viajes</h1>
      <TripsTable />
      <div>
        <button onClick={()=>setOpenModal("addTrip")}>Crear viaje</button>
        <button>Eliminar viaje</button>
      </div>
    </section>
  )
}