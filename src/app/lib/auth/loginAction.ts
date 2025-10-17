"use server" 

import { cookies } from "next/headers"
import { redirect } from "next/navigation";

//TODO: Tipado aca
export default async function loginAction(data){
  if(data.token){
    const cookieStorage = await cookies();
    const token = cookieStorage.set({name: 'token', value: data.token, httpOnly: true, path: '/'})
    redirect('/')
  }
}