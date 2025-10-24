import { Lugares } from "@/entities/entities/Lugares";
import { initializeDataSource } from "@/app/lib/db/data-server";

//TODO: Tipado aca
export async function createPlace(body){
  try{
    const db = await initializeDataSource();
    const repo = db.getRepository(Lugares)
    const place = repo.create(body);
    await repo.save(place);
    return {message: "Place created"}
  } catch(e) {
    console.error('error', e);
  }
}
