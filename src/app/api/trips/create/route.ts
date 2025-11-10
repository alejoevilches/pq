import { NextResponse } from "next/server";
import { createTrip } from "./service";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await createTrip(body);
    return NextResponse.json(result, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}