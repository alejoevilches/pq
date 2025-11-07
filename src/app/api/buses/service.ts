import { initializeDataSource } from "@/app/lib/db/data-server";
import { Buses } from "@/entities/entities/Buses";

export async function getBuses(){
  const db = await initializeDataSource();
  const repo = db.getRepository(Buses);
  const buses = repo.find();
  return buses;
}