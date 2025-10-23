import { initializeDataSource } from "@/app/lib/db/data-server";
import { TipoLugar } from "@/entities/entities/TipoLugar";
export default async function getPlaceTypes(){
  const db = await initializeDataSource();
  const repo = db.getRepository(TipoLugar);
  const types = await repo.find()
  return types;
}