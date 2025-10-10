import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tipo_lugar", { schema: "puroquilmes_local" })
export class TipoLugar {
  @PrimaryGeneratedColumn({ type: "int", name: "tipo_lugar_id" })
  tipoLugarId: number;

  @Column("varchar", { name: "nombre", nullable: true, length: 100 })
  nombre: string | null;

  @Column("tinyint", { name: "estado", nullable: true, width: 1 })
  estado: boolean | null;
}
