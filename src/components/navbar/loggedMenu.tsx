//TODO: Tipado aca
export default function LoggedMenu({name}){
  return (
    <>
      <p>Bienvenido, {name}</p>
      <a href="/login">
        <button>Cerrar sesión</button>
      </a> 
    </>
  )
}