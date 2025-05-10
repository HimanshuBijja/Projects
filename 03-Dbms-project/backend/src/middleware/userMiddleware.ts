import { NextFunction, Request, Response } from "express";

export default async function userMiddleware(req : Request, res : Response, next : NextFunction): Promise<any>{
    //@ts-ignore
    const authHeader = req.headers.authorization;
    

    next();
}