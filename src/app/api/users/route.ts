import {createUser, getCurrentUser} from "./service";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function POST(request:Request){
  const body=await request.json();
  const result=await createUser(body);
  return NextResponse.json(result, {status: 201});
}

export async function GET(request: Request){
  try{
    const authHeader=request.headers.get("authorization");
    const token=authHeader?.split(" ")[1]
    if (!token) {
      return NextResponse.json({ error: "Token requerido" }, { status: 401 });
    }
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    //TODO: Tipar los payloads
    const userId=payload.usuId;
    const user = await getCurrentUser(userId);
    return NextResponse.json(user, {status: 200})
  } catch(e) {
    console.error("Error al verificar JWT:", e);
    return NextResponse.json({ error: "Token inválido o expirado" }, { status: 401 });
  }
}