import { AppDataSource, initializeDataSource } from "@/app/lib/db/data-server";
import { Usuarios } from "@/entities/entities/Usuarios";

//TODO: Esto funciona de pedo pero si usas initializeDataSource no deberias consumir AppDataSource. 

export default async function createUser(body) {
  await initializeDataSource().catch((e) =>
    console.log("Error during Data Source initialization:", e)
  );
  console.log(
    "Entidades registradas:",
    AppDataSource.entityMetadatas.map((e) => e.name)
  );
  const repo = AppDataSource.getRepository(Usuarios);
  const user = repo.create(body);
  await repo.save(user);
  return Response.json({ message: "User created", body }, { status: 201 });
}