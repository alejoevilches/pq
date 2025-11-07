import { useState, useEffect } from "react";

interface PlacePageProps {
  params: { id: string };
}

export default async function PlacePage({ params }: PlacePageProps) {
  const [place, setPlace] = useState();
  const { id } = params;

  useEffect(()=>{
    getPlaceService(place).then((data)=>setPlace(data));
  }, [])

  if (!place){
    return "Cargando..."
  }

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-4xl mt-26 pb-4">Bienvenido a la pagina de gestion de viajes</h1>
      <p>ID recibido desde la URL: {place.id}</p>
      <p>Nombre (simulado): {place.nombre}</p>
    </section>
  );
}