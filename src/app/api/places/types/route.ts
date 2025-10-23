import { NextResponse } from "next/server";
import getPlaceTypes from "./service";

export async function GET(){
  const types = await getPlaceTypes();
  return NextResponse.json(types, {status: 200});
}