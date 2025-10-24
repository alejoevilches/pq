import { initializeDataSource } from "@/app/lib/db/data-server";
import { Usuarios } from "@/entities/entities/Usuarios";

//TODO: Tipado aca
export async function createUser(body) {
  const db = await initializeDataSource();
  const repo = db.getRepository(Usuarios);
  const userCheck = await repo.findOne({
    where: {
      dni: body.dni
    }
  })
  if(userCheck){
    throw new Error("Usuario ya registrado")
  }
  const user = repo.create({...body, estado:1, rolId:1});
  await repo.save(user);
  return { message: "User created"};
}

//TODO: Tipado aca
export async function getCurrentUser(body){
  const db = await initializeDataSource();
  const repo = db.getRepository(Usuarios);
  const user = await repo.find({
    where: {
      usuId: body
    }
  })
  return user[0]
}