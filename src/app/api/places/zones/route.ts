import { NextResponse } from "next/server";
import getZones from "./service";

export async function GET(){
  const zones = await getZones();
  return NextResponse.json(zones, {status: 200});
}