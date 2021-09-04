import { MealApplyModel } from "../../data/db/typeorm/model/meal-apply";
import { StudentModel } from "../../data/db/typeorm/model/student";
import { ConnectionOptions } from "typeorm";
import config from "../../infrastructure/config/env";

export const createOptions: ConnectionOptions = {
   type: "mysql",
   host: config.mysql.host,
   port: 3306,
   username: config.mysql.username,
   password: config.mysql.password,
   database: config.mysql.name,
   synchronize: false,
   logging: config.env === "development",
   entities: [MealApplyModel, StudentModel]
}