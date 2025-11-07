import { initializeDataSource } from "@/app/lib/db/data-server";
import { Lugares } from "@/entities/entities/Lugares";

export async function getPlace(placeId: number) {
  console.log("ID recibido:", placeId, typeof placeId);
  const db = await initializeDataSource();
  const repo = db.getRepository(Lugares);

  const place = await repo.findOne({
    where: { lugarId: placeId },
  });

  if (!place){
    throw new Error("Place does not exist");
  }

  return place;
}