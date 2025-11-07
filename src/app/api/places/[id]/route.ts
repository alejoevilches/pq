import { NextResponse } from "next/server";
import { getPlace } from "./service";

export async function GET(){
  const places = await getPlace();
  return NextResponse.json(places, {status: 200})
}