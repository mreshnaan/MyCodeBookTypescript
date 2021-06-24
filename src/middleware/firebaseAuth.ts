import express from "express";
import admin from "firebase-admin";
import { errorResponseHandler } from "../helper/customHandler";

interface IRequest extends Express.Request {
    [key: string]: any
}




export async function checkIfAuthenticated(req: IRequest, res: express.Response, next: express.NextFunction) {
    try {
        if (req.headers.authorization && req.headers.authorization.split(" ")[0] == "Bearer") {
            const token: string = req.headers.authorization.split('Bearer')[1].trim();
            const userInfo = await admin.auth().verifyIdToken(token);
            req.userid = userInfo.uid;
            
            if (userInfo == null) {
                return errorResponseHandler(res, 401, "Failed", "Token Missing", "")
            }
            return next();
        }
        return errorResponseHandler(res, 401, "Failed", "Your Not Authorized", "")

    } catch (error) {
        return errorResponseHandler(res, 401, "Failed", "Invalid Token", error)

    }


}