import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("zonas", { schema: "puroquilmes_local" })
export class Zonas {
  @PrimaryGeneratedColumn({ type: "int", name: "zona_id" })
  zonaId: number;

  @Column("varchar", { name: "nombre", nullable: true, length: 100 })
  nombre: string | null;
}
