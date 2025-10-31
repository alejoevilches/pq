import { TipoLugar } from "@/entities/entities/TipoLugar";
import { Usuarios } from "../../../entities/entities/Usuarios"; // Ruta relativa corregida
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Zonas } from "@/entities/entities/Zonas";
import { Lugares } from "@/entities/entities/Lugares";
import { Viajes } from "@/entities/entities/Viajes";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3307,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true, //poner en true si estamos usando la base local
    subscribers: [],
    migrations: [],
    entities: [Usuarios, TipoLugar, Zonas, Lugares, Viajes],
})

export const initializeDataSource = async () => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }
    return AppDataSource;
};