import createUser from "@/app/lib/services/usersService";
import { NextResponse } from "next/server";

export async function POST(request:Request){
  const body=await request.json();
  const result=await createUser(body);
  return NextResponse.json(result);
}