"use client";

import { useState, useEffect } from 'react';
import getPlaceService, { getPlaceTypesService, getZonesService } from '@/app/services/placeServices';
import { Lugares } from '@/entities/entities/Lugares';

export default function PlaceData({params}: {params: {id: string}}) {
  const [place, setPlace] = useState<Lugares | null>(null);
  const [tipoNombre, setTipoNombre] = useState<string | null>(null);
  const [zonaNombre, setZonaNombre] = useState<string | null>(null);
  const { id } = params;

  useEffect(() => {
    let mounted = true;

    async function fetchAll() {
      const placeId = parseInt(id);

      const [p, tipos, zonas] = await Promise.all([
        getPlaceService(placeId),
        getPlaceTypesService(),
        getZonesService(),
      ]);

      if (!mounted) return;

      setPlace(p);

      // map tipoLugarId -> nombre
      if (p?.tipoLugarId != null) {
        const tipo = (tipos || []).find((t: any) => t.tipoLugarId === p.tipoLugarId);
        setTipoNombre(tipo?.nombre ?? null);
      }

      // map zonaId -> nombre
      if (p?.zonaId != null) {
        const zona = (zonas || []).find((z: any) => z.zonaId === p.zonaId);
        setZonaNombre(zona?.nombre ?? null);
      }
    }

    fetchAll();

    return () => {
      mounted = false;
    };
  }, [id]);

  if (!place) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-26">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{place.nombre}</h1>
            {place.ubicacion && <p className="text-sm text-gray-600 mb-4">{place.ubicacion}</p>}

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Descripción</h2>
              {place.descripcion && place.descripcion.trim().length > 0 ? (
                <p className="text-gray-700 whitespace-pre-line">{place.descripcion}</p>
              ) : (
                <p className="italic text-gray-500">este lugar todavia no tiene descripcion</p>
              )}
            </div>
          </div>

          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="bg-gray-50 p-4 rounded mb-4">
              <h3 className="font-semibold text-gray-600">Tipo</h3>
              <p className="mt-1 text-sm">{tipoNombre ?? (place.tipoLugarId ? `ID: ${place.tipoLugarId}` : 'N/A')}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded mb-4">
              <h3 className="font-semibold text-gray-600">Zona</h3>
              <p className="mt-1 text-sm">{zonaNombre ?? (place.zonaId ? `ID: ${place.zonaId}` : 'N/A')}</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
