import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import 'dotenv/config'


export const userMiddleware = (req: Request, res: Response, next: NextFunction) =>{
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string,process.env.JWT_PASSWORD as string);

    try {
        if(decoded){
            // @ts-ignore
            req.userId = decoded.id
            next();
        } else{
            res.status(403).json({
                message: "You are not login"
            })
        }
    } catch (error:any) {
        console.log(error)
        res.json({
            message: error.message
        })
    }

}