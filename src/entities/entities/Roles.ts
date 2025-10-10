import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("roles", { schema: "puroquilmes_local" })
export class Roles {
  @PrimaryGeneratedColumn({ type: "int", name: "rol_id" })
  rolId: number;

  @Column("varchar", { name: "nombre", length: 100 })
  nombre: string;

  @Column("tinyint", { name: "estado", nullable: true, width: 1 })
  estado: boolean | null;
}
