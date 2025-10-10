"use client"

//TODO: Esto deberia exportarse a un servicio

export default function RegisterForm(){
  const handleSubmit=async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData=new FormData(e.target as HTMLFormElement);
    const formValues={
      "name": formData.get("name"),
      "lastname": formData.get("lastname"),
      "email": formData.get("email"),
      "phone": formData.get("phone"),
      "dni": formData.get("dni"),
      "pass": formData.get("pass"),
    }
    
    try{
      const response=await fetch('api/users', {method: 'POST', body: JSON.stringify(formValues)});
      if (!response.ok){
        console.error(response.status)
      }
      const result=await response.json()
      console.log(result);
    } catch(err){
      console.error(err)
    }
  }

  return(
    <form className="flex flex-col gap-4 bg-white w-xl rounded-2xl p-4" onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre</label>
      <input className="register-input" type="text" placeholder="Juan" id="name" name="name"/>
      <label htmlFor="lastname">Apellido</label>
      <input className="register-input" type="text" placeholder="Perez" id="lastname" name="lastname"/>
      <label htmlFor="email">Email</label>
      <input className="register-input" type="email" placeholder="jperez@google.com" id="email" name="email"/>
      <label htmlFor="phone">Telefono</label>
      <input className="register-input" type="number" placeholder="42560912" id="phone" name="phone"/>
      <label htmlFor="dni">Número de Documento</label>
      <input className="register-input" type="number" placeholder="30150912" id="dni" name="dni"/>
      <label htmlFor="pass">Contraseña</label>
      <input className="register-input" type="password" id="pass" name="pass"/>
      <input type="submit" value="Crear cuenta" />
    </form>
  )
}