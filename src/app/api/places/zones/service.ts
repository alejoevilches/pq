import { initializeDataSource } from "@/app/lib/db/data-server";
import { Zonas } from "@/entities/entities/Zonas";

export default async function getPlaceTypes(){
  const db = await initializeDataSource();
  const repo = db.getRepository(Zonas);
  const zones = await repo.find()
  return zones;
}