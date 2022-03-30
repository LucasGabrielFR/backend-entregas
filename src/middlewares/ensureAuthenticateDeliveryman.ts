import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string;
}

export async function ensureAuthenticateDeliveryman(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({
            message: "Deliveryman not authenticated"
        });
    }

    const [, token] = authHeader.split(" ");

    try {

        const { sub } = verify(token, "a2edba53a0d7c0b9905441c25a521457") as IPayload;

        request.id_deliveryman = sub;

        return next();
    } catch (err) {
        return response.status(401).json({
            message: "Deliveryman not authenticated"
        });
    }

}