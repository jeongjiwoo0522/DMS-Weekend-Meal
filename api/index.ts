import express, { Application } from "express";
import serverlessExpress from "@vendia/serverless-express";
import { Context } from "aws-lambda";

const app: Application = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/api/ping", (req, res) => res.json({ message: "pong" }));

export const handler = (event: any, context: Context, callback: any) => {
    return serverlessExpress({ app })(event, context, callback);
}