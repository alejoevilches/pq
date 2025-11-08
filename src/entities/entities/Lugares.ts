import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lugares", { schema: "puroquilmes_local" })
export class Lugares {
  @PrimaryGeneratedColumn({ type: "int", name: "lugar_id" })
  lugarId: number;

  @Column("varchar", { name: "nombre", length: 100 })
  nombre: string;

  @Column("varchar", { name: "ubicacion", nullable: true, length: 100 })
  ubicacion: string | null;

  @Column("int", { name: "zona_id", nullable: true })
  zonaId: number | null;

  @Column("int", { name: "tipo_lugar_id", nullable: true })
  tipoLugarId: number | null;

  @Column("text", { name: "descripcion", nullable: true })
  descripcion: string | null;

  @Column("tinyint", { name: "estado", nullable: true, width: 1 })
  estado: boolean | null;

  @Column("int", { name: "contador_descuento", nullable: true })
  contadorDescuento: number | null;
}
