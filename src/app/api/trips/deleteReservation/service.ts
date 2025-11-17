import { initializeDataSource } from "@/app/lib/db/data-server";
import { Pasajeros } from "@/entities/entities/Pasajeros";
import { Viajes } from "@/entities/entities/Viajes";

export default async function deleteReservationService(body:{ pasajeroId?: number; viajeId?: number; usuarioId?: number }){
  const db = await initializeDataSource();
  const pasajeroRepo = db.getRepository(Pasajeros);
  const viajeRepo = db.getRepository(Viajes);

  const queryRunner = db.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try{
    let pasajero;
    if (body.pasajeroId) {
      pasajero = await queryRunner.manager.findOne(Pasajeros, { where: { pasajeroId: body.pasajeroId } });
    } else if (body.viajeId && body.usuarioId) {
      pasajero = await queryRunner.manager.findOne(Pasajeros, { where: { viajeId: body.viajeId, usuarioId: body.usuarioId } });
    } else {
      await queryRunner.rollbackTransaction();
      return { ok: false, status: 400, message: 'Parametros insuficientes' };
    }

    if (!pasajero) {
      await queryRunner.rollbackTransaction();
      return { ok: false, status: 404, message: 'Reserva no encontrada' };
    }

    const cantidad = pasajero.cantidadPasajeros ?? 0;
    const viaje = await queryRunner.manager.findOne(Viajes, { where: { viajeId: pasajero.viajeId } });

    // delete pasajero
    await queryRunner.manager.delete(Pasajeros, { pasajeroId: pasajero.pasajeroId });

    // increment lugaresDisponibles
    if (viaje) {
      viaje.lugaresDisponibles = (viaje.lugaresDisponibles ?? 0) + cantidad;
      await queryRunner.manager.save(Viajes, viaje);
    }

    await queryRunner.commitTransaction();
    return { ok: true, status: 200, message: 'Reserva eliminada' };
  } catch(e) {
    await queryRunner.rollbackTransaction();
    console.error(e);
    return { ok: false, status: 500, message: 'Error interno' };
  } finally {
    await queryRunner.release();
  }
}
