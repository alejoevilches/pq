import { Viajes } from "@/entities/entities/Viajes";
import { initializeDataSource } from "@/app/lib/db/data-server";

//TODO: Tipado aca
export async function createTrip(body){
  try{
    const db = await initializeDataSource();
    const repo = db.getRepository(Viajes)
    const place = repo.create(body);
    await repo.save(place);
    return {message: "Trip created"}
  } catch(e) {
    console.error('error', e);
  }
}
