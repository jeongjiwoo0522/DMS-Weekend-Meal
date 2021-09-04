import serverlessExpress from "@vendia/serverless-express";
import { Callback, Context, Handler } from "aws-lambda";

import express, { Application } from "express";
import { createConnection } from "typeorm";
import { v1Router } from "./api/presentation/rest/router";
import config from "./api/infrastructure/config/env";
import { MealApplyModel } from "./api/data/db/typeorm/model/meal-apply";
import { StudentModel } from "./api/data/db/typeorm/model/student";

let server: Handler;

async function createApplication() {
    await createConnection({
        type: "mysql",
        host: config.mysql.host,
        port: 3306,
        username: config.mysql.username,
        password: config.mysql.password,
        database: config.mysql.name,
        synchronize: false,
        logging: config.env === "development",
        entities: [MealApplyModel, StudentModel]
     });

    const app: Application = express();
    app.use(express.json());
    app.use("/v1", v1Router());

    return serverlessExpress({ app });
}

export const handler = async (event: any, context: Context, callback: Callback) => {
    server = server ?? await createApplication();
    return server(event, context, callback);
}