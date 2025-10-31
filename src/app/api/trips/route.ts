import { NextResponse } from "next/server";
import { getTrips } from "./service";

export async function GET(req: Request){
  const trips = await getTrips();
  return NextResponse.json(trips, {status: 200})
}