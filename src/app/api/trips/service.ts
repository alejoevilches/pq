import { initializeDataSource } from "@/app/lib/db/data-server";
import { Viajes } from "@/entities/entities/Viajes";

export async function getTrips(){
  const db = await initializeDataSource();
  const repo = db.getRepository(Viajes);
  const data = repo.find();
  return data;
}