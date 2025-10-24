import { NextResponse } from "next/server";
import { deletePlace } from "./service";

export async function POST(req: Request){
  try{
    const body=await req.json();
    console.log(body)
    const result=await deletePlace(body);
    return NextResponse.json(result, {status: 200})
  } catch(e){
    return NextResponse.json(`Error in deletePlace endpoint: ${e}`, {status: 400})
  }
}