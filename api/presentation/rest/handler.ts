import { Response, Request } from "express";

export interface CustomRequest extends Request {
    [key: string]: any;
}

export interface CustomResponse extends Response {
    [key: string]: any;
}

export interface CustomHandler {
    (req: CustomRequest, res: CustomResponse): void;
}