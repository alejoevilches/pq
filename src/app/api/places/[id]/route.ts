import { NextResponse } from "next/server";
import { getPlace } from "./service";

export async function GET(req: Request, context: {params: Promise<{id: number}>}){
  const { id } = await context.params;
  const places = await getPlace(id);
  return NextResponse.json(places, {status: 200})
}