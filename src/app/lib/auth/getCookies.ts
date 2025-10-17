"use server"

import { cookies } from "next/headers";

//TODO: Tipar esto. Ademas hacer que todas las cookies se busquen por aca.
export default async function getCookies(cookieName){
  const cookieStore = await cookies();
  return cookieStore.get(cookieName)?.value
}