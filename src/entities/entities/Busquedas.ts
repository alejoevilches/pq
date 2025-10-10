import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("busquedas", { schema: "puroquilmes_local" })
export class Busquedas {
  @PrimaryGeneratedColumn({ type: "int", name: "busqueda_id" })
  busquedaId: number;

  @Column("date", { name: "fecha", nullable: true })
  fecha: string | null;

  @Column("int", { name: "usu_id", nullable: true })
  usuId: number | null;

  @Column("int", { name: "lugar_id", nullable: true })
  lugarId: number | null;
}
