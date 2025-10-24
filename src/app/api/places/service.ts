import { initializeDataSource } from "@/app/lib/db/data-server";
import { Lugares } from "@/entities/entities/Lugares";

export async function getPlaces(){
  const db=await initializeDataSource();
  const repo=db.getRepository(Lugares);
  const places=repo.find();
  return places;
}