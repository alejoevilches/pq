import createUser from "./service";
import { NextResponse } from "next/server";

export async function POST(request:Request){
  const body=await request.json();
  const result=await createUser(body);
  return NextResponse.json(result, {status: 201});
}