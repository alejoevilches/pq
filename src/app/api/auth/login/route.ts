import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import login from "./service";

export async function POST(request: Request){
  const body = await request.json();
  const result = await login(body);

  // If login successful and token present, set httpOnly cookie and return 200
  if (result && result.token) {
    const cookieStore = cookies();
    cookieStore.set({ name: 'token', value: result.token, httpOnly: true, path: '/' });
    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  }

  // Invalid credentials
  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}

