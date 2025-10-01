export default function Navbar(){
  return(
    <nav className="flex flex-row bg-puroquilmes-200 items-center justify-between p-4 w-3xl mx-auto mt-4 rounded-full gap-4">
      <p>Puro Quilmes</p>
      <form>
        <input 
          type="text"
          placeholder="Busca tus lugares favoritos"
          className="bg-white rounded-full p-2"  
        />
      </form>
      <section className="flex flex-row gap-4">
        <a href="/register">
          <button>Crear cuenta</button>
        </a>
        <button>Iniciar sesión</button>
      </section>
    </nav>
  )
}