import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import NoUserMenu from '../navbar/noUserMenu';
import LoggedMenu from '../navbar/loggedMenu';

export default async function Navbar(){
  const cookieStore = await cookies();
  let nombre = null
  const token = cookieStore.get('token')?.value;
  if (token){
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    nombre  = payload.nombre;
  }
  return(
    <nav 
      className="
      absolute 
      left-1/2 
      -translate-x-1/2 
      flex flex-row
      bg-puroquilmes-200 
      items-center 
      justify-between 
      p-4 w-3xl mt-4 
      rounded-full 
      gap-4">
      <a href='/'>Puro Quilmes</a>
      <form>
        <input 
          type="text"
          placeholder="Busca tus lugares favoritos"
          className="bg-white rounded-full p-2"  
        />
      </form>
      <section className="flex flex-row gap-4">
        { token ? <LoggedMenu name={nombre} /> : <NoUserMenu /> }
      </section>
    </nav>
  )
}