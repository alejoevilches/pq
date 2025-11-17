"use client"
import { useState } from 'react'
import { validateLetters, validateNumbers } from "@/app/lib/validations";
import {createUserService} from "@/app/services/userServices";
import { ToastContainer, toast } from "react-toastify";
import { redirect } from "next/navigation";

export default function RegisterForm(){
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit=async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData=new FormData(e.target as HTMLFormElement);
    const formValues={
      "nombre": formData.get("name"),
      "apellido": formData.get("lastname"),
      "email": formData.get("email"),
      "telefono": formData.get("phone"),
      "dni": formData.get("dni"),
      "clave": formData.get("pass"),
    }

    try{
      setIsLoading(true);
      const result = await createUserService(formValues);
      if (result){
        redirect("/login");
      } else {
        toast("Usuario ya existente");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return(
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}

      <form className="flex flex-col gap-4 bg-white w-xl rounded-2xl p-4" onSubmit={handleSubmit} aria-busy={isLoading}>
        <ToastContainer />
        <label htmlFor="name">Nombre</label>
        <input 
          className="register-input" 
          type="text" placeholder="Juan" 
          id="name" 
          name="name" 
          onChange={validateLetters}
          disabled={isLoading}
        />
        <label htmlFor="lastname">Apellido</label>
        <input 
          className="register-input" 
          type="text" placeholder="Perez" 
          id="lastname" name="lastname" 
          onChange={validateLetters}
          disabled={isLoading}
        />
        <label htmlFor="email">Email</label>
        <input 
          className="register-input" 
          type="email" 
          placeholder="jperez@google.com" 
          id="email" 
          name="email"
          disabled={isLoading}
        />
        <label htmlFor="phone">Telefono</label>
        <input 
          className="register-input" 
          type="text" 
          placeholder="42560912" 
          id="phone" 
          name="phone"
          maxLength={10}
          onChange={validateNumbers}
          disabled={isLoading}
          />
        <label htmlFor="dni">Número de Documento</label>
        <input 
          className="register-input" 
          type="text" 
          placeholder="30150912" 
          id="dni" 
          name="dni"
          maxLength={8}
          onChange={validateNumbers}
          disabled={isLoading}
          />
        <label htmlFor="pass">Contraseña</label>
        <input 
          className="register-input" 
          type="password" 
          id="pass" 
          name="pass"
          disabled={isLoading}
        />
        <input type="submit" value="Crear cuenta" disabled={isLoading} />
      </form>
    </div>
  )
}