import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fotos", { schema: "puroquilmes_local" })
export class Fotos {
  @PrimaryGeneratedColumn({ type: "int", name: "foto_id" })
  fotoId: number;

  @Column("varchar", { name: "detalle", nullable: true, length: 100 })
  detalle: string | null;

  @Column("varchar", { name: "url", nullable: true, length: 100 })
  url: string | null;

  @Column("int", { name: "lugar_id", nullable: true })
  lugarId: number | null;
}
