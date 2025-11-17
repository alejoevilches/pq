import { NextResponse } from "next/server";
import deleteReservationService from "./service";

export async function POST(request: Request){
  const body = await request.json();
  const result = await deleteReservationService({
    pasajeroId: body.pasajeroId,
    viajeId: body.viajeId,
    usuarioId: body.usuarioId,
  });

  if (result.ok) {
    return NextResponse.json({ message: result.message }, { status: 200 });
  }

  return NextResponse.json({ error: result.message }, { status: result.status || 400 });
}
