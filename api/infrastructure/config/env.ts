import { config } from "dotenv";

config();

export default {
    env: process.env.NODE_ENV,
    port: +process.env.PORT,
    mysql: {
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
    },
}