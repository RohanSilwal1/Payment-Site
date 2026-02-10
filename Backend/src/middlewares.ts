import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";
interface CustomJwtPayload extends JwtPayload {
    userId: string;
}

export function middlewares(req: Request, res: Response, next: NextFunction) {
    dotenv.config();
    const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
        return res.status(500).json({
            message: "JWT_SECRET is not defined",
        });
    }
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(411).json({
            message: "Authorization header missing or invalid"
        })
    }
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            message: 'Token missing from Authorization header',
        });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as CustomJwtPayload;
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(401).json({
            message: "Invalid token",
        });
    }

}