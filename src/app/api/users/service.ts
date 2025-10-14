import { AppDataSource, initializeDataSource } from "@/app/lib/db/data-server";
import { Usuarios } from "@/entities/entities/Usuarios";

export default async function createUser(body) {
  const db = await initializeDataSource();
  const repo = db.getRepository(Usuarios);
  console.log(body);
  const user = repo.create({...body, estado:1, rolId:1});
  const result = await repo.save(user);
  return Response.json({ message: "User created", result}, { status: 201 });
}