import { initializeDataSource } from "@/app/lib/db/data-server";
import * as jose from 'jose'

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

//TODO: Tipado aca
export default async function login(body){
  const {email, clave}=body;
  const db = await initializeDataSource();
  const repo = db.getRepository("usuarios");
  const user = await repo.find({
    where: {
      email: email,
      clave: clave
    }
  })
  if(user.length>0){
    const {nombre, apellido, rolId, email, dni, lugarId, usuId}=user[0];
      const jwt=await new jose.SignJWT({nombre, apellido, rolId, email, dni, lugarId, usuId})
        .setProtectedHeader({alg: 'HS256'})
        .setExpirationTime('2h')
        .sign(secret);
      console.log("🔐 Generación token - secret:", process.env.JWT_SECRET);
      return {message: "Login successful", token: jwt};
  }
}