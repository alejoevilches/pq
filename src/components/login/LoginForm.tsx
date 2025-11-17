"use client"
import { useState } from 'react'
import { loginService } from "@/app/services/authServices";
import { toast } from 'react-toastify'

//TODO: Tipado aca
export default function LoginForm(){
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData=new FormData(e.target);
    const formValues={
      "email": formData.get("email"),
      "clave": formData.get("pass"),
    }

    try{
      setIsLoading(true);
      const res = await loginService(formValues);
      // if login successful (server set cookie and returned 200)
      if (res.ok && res.data && !res.data.error) {
        // redirect to home
        window.location.href = '/';
        return res;
      }

      // invalid credentials
      toast.error('Credenciales incorrectas');
      return res;
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

      <form
        className="flex flex-col gap-4 bg-white w-xl rounded-2xl p-4"
        onSubmit={handleSubmit}
        autoComplete="off"
        aria-busy={isLoading}
      >
        <label htmlFor="email">Email</label>
        <input
          className="register-input"
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          spellCheck={false}
          autoCorrect="off"
          autoCapitalize="off"
          disabled={isLoading}
        />

        <label htmlFor="pass">Contraseña</label>
        <input
          className="register-input"
          type="password"
          name="pass"
          id="pass"
          autoComplete="off"
          spellCheck={false}
          autoCorrect="off"
          autoCapitalize="off"
          disabled={isLoading}
        />

        <input type="submit" value="Iniciar sesion" disabled={isLoading} />
      </form>
    </div>
  )
}