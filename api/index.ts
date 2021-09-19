import express, { Application } from "express";
import { createConnection } from "typeorm";
import { v1Router } from "./presentation/rest/router";
import { MealApplyModel } from "./data/db/typeorm/model/meal-apply";
import { StudentModel } from "./data/db/typeorm/model/student";
import config from "./infrastructure/config/env";
import path from "path";
import cors from "cors";

async function createApplication() {
    await createConnection({
        type: "mysql",
        host: config.mysql.host,
        port: 3306,
        username: config.mysql.username,
        password: config.mysql.password,
        database: config.mysql.name,
        synchronize: false,
        logging: false,
        entities: [MealApplyModel, StudentModel]
     });

    const app: Application = express();
    app.use("/static", express.static(path.join(__dirname, "./core/util/file")));
    app.use(cors({
        origin: "*",
        credentials: true
    }));
    app.use(express.json());
    app.use("/v1", v1Router());
    app.listen(3000, () => console.log("ok"));
}

createApplication();