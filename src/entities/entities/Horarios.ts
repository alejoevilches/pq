import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("horarios", { schema: "puroquilmes_local" })
export class Horarios {
  @PrimaryGeneratedColumn({ type: "int", name: "horario_id" })
  horarioId: number;

  @Column("int", { name: "lugar_id", nullable: true })
  lugarId: number | null;

  @Column("varchar", { name: "dia", nullable: true, length: 100 })
  dia: string | null;

  @Column("datetime", { name: "horario_apertura", nullable: true })
  horarioApertura: Date | null;

  @Column("datetime", { name: "horario_cierre", nullable: true })
  horarioCierre: Date | null;
}
