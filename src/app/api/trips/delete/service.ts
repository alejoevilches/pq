import { initializeDataSource } from "@/app/lib/db/data-server";
import { Viajes } from "@/entities/entities/Viajes";

//TODO: Tipado aca
export async function deleteTrip(tripId){
  const db=await initializeDataSource()
  const repo=db.getRepository(Viajes)
  const trip=await repo.findOne({
    where:{
      "viajeId": tripId
    }
  })
  if (!trip){
    throw new Error("Place does not exist");
  }
  await repo.remove(trip);
  return {message: 'Place deleted'}
}