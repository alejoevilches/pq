"use client"
import { validateLetters, validateNumbers } from "@/app/lib/validations";
import {createUserService} from "@/app/services/userServices";
import { ToastContainer, toast } from "react-toastify";
import { redirect } from "next/navigation";

export default function RegisterForm(){
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
    const result = await createUserService(formValues);
    if (result){
      redirect("/login");
    } else {
      toast("Usuario ya existente");
    }
  }

  return(
    <form className="flex flex-col gap-4 bg-white w-xl rounded-2xl p-4" onSubmit={handleSubmit}>
      <ToastContainer />
      <label htmlFor="name">Nombre</label>
      <input 
        className="register-input" 
        type="text" placeholder="Juan" 
        id="name" 
        name="name" 
        onChange={validateLetters} />
      <label htmlFor="lastname">Apellido</label>
      <input 
        className="register-input" 
        type="text" placeholder="Perez" 
        id="lastname" name="lastname" 
        onChange={validateLetters}/>
      <label htmlFor="email">Email</label>
      <input 
        className="register-input" 
        type="email" 
        placeholder="jperez@google.com" 
        id="email" 
        name="email"/>
      <label htmlFor="phone">Telefono</label>
      <input 
        className="register-input" 
        type="text" 
        placeholder="42560912" 
        id="phone" 
        name="phone"
        maxLength={10}
        onChange={validateNumbers}
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
        />
      <label htmlFor="pass">Contraseña</label>
      <input 
        className="register-input" 
        type="password" 
        id="pass" 
        name="pass"/>
      <input type="submit" value="Crear cuenta" />
    </form>
  )
}