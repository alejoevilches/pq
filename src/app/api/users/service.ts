import { initializeDataSource } from "@/app/lib/db/data-server";
import { Usuarios } from "@/entities/entities/Usuarios";
import { Pasajeros } from "@/entities/entities/Pasajeros";
import { Viajes } from "@/entities/entities/Viajes";

//TODO: Tipado aca
export async function createUser(body) {
  const db = await initializeDataSource();
  const repo = db.getRepository(Usuarios);
  const userCheck = await repo.findOne({
    where: {
      dni: body.dni
    }
  })
  if(userCheck){
    throw new Error("Usuario ya registrado")
  }
  const user = repo.create({...body, estado:1, rolId:1});
  await repo.save(user);
  return { message: "User created"};
}

//TODO: Tipado aca
export async function getCurrentUser(body){
  const db = await initializeDataSource();
  const repo = db.getRepository(Usuarios);
  const user = await repo.find({
    where: {
      usuId: body
    }
  })

  const result = user[0];

  if (!result) return null;

  // find an active reservation (pasajero) for this user
  const pasajeroRepo = db.getRepository(Pasajeros);
  const viajeRepo = db.getRepository(Viajes);

  const pasajero = await pasajeroRepo.findOne({
    where: {
      usuarioId: body,
      estado: 1,
    }
  });

  if (pasajero) {
    const viaje = await viajeRepo.findOne({ where: { viajeId: pasajero.viajeId } });
    // attach reservation info to result
    // shape: reservation: { pasajeroId, viajeId, cantidadPasajeros, viaje: {...} }
    (result as any).reservation = {
      pasajeroId: pasajero.pasajeroId,
      viajeId: pasajero.viajeId,
      cantidadPasajeros: pasajero.cantidadPasajeros,
      viaje: viaje ?? null,
    };
  }

  return result
}