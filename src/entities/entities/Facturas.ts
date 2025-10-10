import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("facturas", { schema: "puroquilmes_local" })
export class Facturas {
  @PrimaryGeneratedColumn({ type: "int", name: "factura_id" })
  facturaId: number;

  @Column("int", { name: "nro_factura", nullable: true })
  nroFactura: number | null;

  @Column("varchar", { name: "tipo", nullable: true, length: 100 })
  tipo: string | null;

  @Column("int", { name: "usu_id", nullable: true })
  usuId: number | null;

  @Column("date", { name: "fecha_inicio", nullable: true })
  fechaInicio: string | null;

  @Column("date", { name: "fecha_fin", nullable: true })
  fechaFin: string | null;

  @Column("float", { name: "precio", nullable: true, precision: 12 })
  precio: number | null;

  @Column("float", { name: "iva", nullable: true, precision: 12 })
  iva: number | null;

  @Column("float", { name: "total", nullable: true, precision: 12 })
  total: number | null;

  @Column("tinyint", { name: "estado", nullable: true, width: 1 })
  estado: boolean | null;
}
