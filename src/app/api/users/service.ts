import { AppDataSource } from "@/app/lib/db/data-server"; 

export default async function createUser(body){
  const repo=AppDataSource.getRepository("User");
  const user=repo.create(body);
  await repo.save(user);
  
  return Response.json({message: "User created"});
}