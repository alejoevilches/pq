import { NextResponse } from "next/server";
import { deleteTrip } from "./service";

export async function POST(req: Request){
  try{
    const body=await req.json();
    const result=await deleteTrip(body);
    return NextResponse.json(result, {status: 200})
  } catch(e){
    return NextResponse.json(`Error in deleteTrip endpoint: ${e}`, {status: 400})
  }
}