import { Usuarios } from "../../../entities/entities/Usuarios"; // Ruta relativa corregida
import "reflect-metadata"
import { DataSource } from "typeorm"

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
    entities: [Usuarios],
})

export const initializeDataSource = async () => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }
    return AppDataSource;
};