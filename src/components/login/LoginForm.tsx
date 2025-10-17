"use client"
import { loginService } from "@/app/services/authServices";

//TODO: Tipado aca
export default function LoginForm(){
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData=new FormData(e.target);
    const formValues={
      "email": formData.get("email"),
      "clave": formData.get("pass"),
    }
    return loginService(formValues);
  }

  return(
    <form className="flex flex-col gap-4 bg-white w-xl rounded-2xl p-4" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input className="register-input" type="email" name="email" />
      <label htmlFor="pass">Contraseña</label>
      <input className="register-input" type="password" name="pass" id="pass"/>
      <input type="submit" value="Iniciar sesion" />
    </form>
  )
}