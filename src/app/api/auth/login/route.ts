import { NextResponse } from "next/server";
import login from "./service";

export async function POST(request: Request){
  const body=await request.json();
  const result = await login(body);
  return NextResponse.json(result, {status: 200})
}

