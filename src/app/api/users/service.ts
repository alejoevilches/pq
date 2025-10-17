import { initializeDataSource } from "@/app/lib/db/data-server";
import { Usuarios } from "@/entities/entities/Usuarios";

//TODO: Tipado aca
export default async function createUser(body) {
  const db = await initializeDataSource();
  const repo = db.getRepository(Usuarios);
  const user = repo.create({...body, estado:1, rolId:1});
  await repo.save(user);
  return { message: "User created"};
}