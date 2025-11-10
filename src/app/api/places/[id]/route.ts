import { NextResponse } from "next/server";
import { getPlace } from "./service";

export async function GET(req: Request, context: {params: Promise<{id: string}>}){
  const { id } = await context.params;
  const places = await getPlace(Number(id));
  return NextResponse.json(places, {status: 200})
}