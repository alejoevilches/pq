import { NextResponse } from "next/server";

export async function POST(req: Request){
  const body = await req.json();
  const result = await createPlace(body);
  return new NextResponse(result, {status: 201});
}