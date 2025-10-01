export default function RegisterForm(){
  return(
    <form className="flex flex-col gap-4 bg-white w-xl rounded-2xl p-4">
      <label htmlFor="name">Nombre</label>
      <input className="register-input" type="text" placeholder="Juan" id="name"/>
      <label htmlFor="lastname">Apellido</label>
      <input className="register-input" type="text" placeholder="Perez" id="lastname"/>
      <label htmlFor="email">Email</label>
      <input className="register-input" type="email" placeholder="jperez@google.com" id="email"/>
      <label htmlFor="phone">Telefono</label>
      <input className="register-input" type="number" placeholder="42560912" id="phone"/>
      <label htmlFor="dni">Número de Documento</label>
      <input className="register-input" type="number" placeholder="30150912" id="dni"/>
      <label htmlFor="pass">Contraseña</label>
      <input className="register-input" type="password" id="pass"/>
    </form>
  )
}