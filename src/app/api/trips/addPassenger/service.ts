import { initializeDataSource } from "@/app/lib/db/data-server";
import { Pasajeros } from "@/entities/entities/Pasajeros";
import { Viajes } from "@/entities/entities/Viajes";

export default async function addPassengerService(body: { viajeId: number; cantidadPasajeros: number; usuarioId?: number | null }) {
  const db = await initializeDataSource();
  const pasajeroRepo = db.getRepository(Pasajeros);
  const viajeRepo = db.getRepository(Viajes);

  // use a transaction to ensure consistency
  const queryRunner = db.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    const viaje = await queryRunner.manager.findOne(Viajes, {
      where: { viajeId: body.viajeId },
    });

    if (!viaje) {
      await queryRunner.rollbackTransaction();
      return { ok: false, status: 404, message: 'Viaje no encontrado' };
    }

    const disponibles = viaje.lugaresDisponibles ?? 0;
    const cantidad = Number(body.cantidadPasajeros) || 0;

    if (cantidad <= 0) {
      await queryRunner.rollbackTransaction();
      return { ok: false, status: 400, message: 'Cantidad inválida' };
    }

    if (disponibles < cantidad) {
      await queryRunner.rollbackTransaction();
      return { ok: false, status: 400, message: 'No hay lugares suficientes' };
    }

    // create pasajero
    const pasajero = pasajeroRepo.create({
      viajeId: body.viajeId,
      usuarioId: body.usuarioId ?? null,
      cantidadPasajeros: cantidad,
      estado: true,
    });

    await queryRunner.manager.save(Pasajeros, pasajero);

    // decrement lugaresDisponibles
    viaje.lugaresDisponibles = disponibles - cantidad;
    await queryRunner.manager.save(Viajes, viaje);

    await queryRunner.commitTransaction();

    return { ok: true, status: 200, message: 'Pasajero agregado' };
  } catch (e) {
    await queryRunner.rollbackTransaction();
    console.error(e);
    return { ok: false, status: 500, message: 'Error interno' };
  } finally {
    await queryRunner.release();
  }
}
