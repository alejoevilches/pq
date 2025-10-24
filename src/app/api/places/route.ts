import { NextResponse } from "next/server";
import { getPlaces } from "./service";

export async function GET(){
  const places = await getPlaces();
  return NextResponse.json(places, {status: 200})
}