import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("buses", { schema: "puroquilmes_local" })
export class Buses {
  @PrimaryGeneratedColumn({ type: "int", name: "bus_id" })
  busId: number;

  @Column("varchar", { name: "patente", nullable: true, length: 100 })
  patente: string | null;

  @Column("varchar", { name: "nombre", nullable: true, length: 100 })
  nombre: string | null;

  @Column("tinyint", { name: "estado", nullable: true, width: 1 })
  estado: boolean | null;
}
