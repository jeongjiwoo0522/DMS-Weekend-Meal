import express, { Application } from "express";
import { v1Router } from "./presentation/rest/router";

const app: Application = express();

app.use(express.json());

app.use("/v1", v1Router());

export default app;