import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pasajeros", { schema: "puroquilmes_local" })
export class Pasajeros {
  @PrimaryGeneratedColumn({ type: "int", name: "pasajero_id" })
  pasajeroId: number;

  @Column("int", { name: "viaje_id", nullable: true })
  viajeId: number | null;

  @Column("int", { name: "usuario_id", nullable: true })
  usuarioId: number | null;

  @Column("int", { name: "cantidad_pasajeros", nullable: true })
  cantidadPasajeros: number | null;

  @Column("tinyint", { name: "estado", nullable: true, width: 1 })
  estado: boolean | null;
}
