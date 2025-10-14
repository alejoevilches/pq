import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuarios")
export class Usuarios {
  @PrimaryGeneratedColumn({ type: "int", name: "usu_id" })
  usuId: number;

  @Column("varchar", { name: "nombre", nullable: true, length: 100 })
  nombre: string | null;

  @Column("varchar", { name: "apellido", nullable: true, length: 100 })
  apellido: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 100 })
  email: string | null;

  @Column("varchar", { name: "telefono", nullable: true, length: 100 })
  telefono: string | null;

  @Column("tinyint", { name: "estado", nullable: true, width: 1 })
  estado: boolean | null;

  @Column("int", { name: "rol_id", nullable: true })
  rolId: number | null;

  @Column("varchar", { name: "clave", nullable: true, length: 100 })
  clave: string | null;

  @Column("varchar", { name: "dni", nullable: true, length: 100 })
  dni: string | null;

  @Column("int", { name: "lugar_id", nullable: true })
  lugarId: number | null;
}
