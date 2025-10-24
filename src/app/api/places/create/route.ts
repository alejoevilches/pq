import { NextResponse } from "next/server";
import { createPlace } from "./service";

export async function POST(req: Request){
  const body = await req.json();
  console.log(body);
  const result = await createPlace(body);
  return NextResponse.json(result, {status: 201});
}