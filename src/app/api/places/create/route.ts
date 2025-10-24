import { NextResponse } from "next/server";
import { createPlace } from "./service";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await createPlace(body);
    return NextResponse.json(result, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}