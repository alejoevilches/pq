import { initializeDataSource } from "@/app/lib/db/data-server";
import { Lugares } from "@/entities/entities/Lugares";

//TODO: Tipado aca
export async function deletePlace(placeId){
  const db=await initializeDataSource()
  const repo=db.getRepository(Lugares)
  const place=await repo.findOne({
    where:{
      "lugarId": placeId
    }
  })
  console.log(place)
  if (!place){
    throw new Error("Place does not exist");
  }
  await repo.remove(place);
  return {message: 'Place deleted'}
}