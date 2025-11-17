import { NextResponse } from "next/server";
import addPassengerService from "./service";

export async function POST(request: Request){
  const body = await request.json();
  const result = await addPassengerService({
    viajeId: Number(body.trip || body.viajeId),
    cantidadPasajeros: Number(body.passengers || body.cantidadPasajeros),
    usuarioId: body.usuarioId ?? null,
  });

  if (result.ok) {
    return NextResponse.json({ message: result.message }, { status: 200 });
  }

  return NextResponse.json({ error: result.message }, { status: result.status || 400 });
}
