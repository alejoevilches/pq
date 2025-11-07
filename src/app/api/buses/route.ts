import { NextResponse } from "next/server";
import { getBuses } from "./service";

export async function GET(){
  const buses = await getBuses();
  return NextResponse.json(buses, {status: 200})
}