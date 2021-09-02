import serverlessExpress from "@vendia/serverless-express";
import { Context } from "aws-lambda";
import app from "./api";

export const handler = (event: any, context: Context, callback: any) => {
    return serverlessExpress({ app })(event, context, callback);
}