import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("viajes", { schema: "puroquilmes_local" })
export class Viajes {
  @PrimaryGeneratedColumn({ type: "int", name: "viaje_id" })
  viajeId: number;

  @Column("int", { name: "nro_viaje", nullable: true })
  nroViaje: number | null;

  @Column("int", { name: "bus_id", nullable: true })
  busId: number | null;

  @Column("int", { name: "lugares_disponibles", nullable: true })
  lugaresDisponibles: number | null;

  @Column("date", { name: "fecha", nullable: true })
  fecha: string | null;

  @Column("tinyint", { name: "estado", nullable: true, width: 1 })
  estado: boolean | null;
}
