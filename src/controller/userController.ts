import express from "express";
import model from "../model/userModel";
import { responseHandler, errorResponseHandler } from "../helper/customHandler";


async function getUser(_: express.Request, res: express.Response, __: express.NextFunction) {

    try {

        let data = await model.find({ isPublic: true });
        return responseHandler(res, 201, "Success", JSON.parse(JSON.stringify({ data })), "User Data Successfuly Retrieve")

    } catch (error) {
        return errorResponseHandler(res, 401, "Category Data Retrieve Failed", "Failed", error.message)

    }

}

async function addUser(req: express.Request, res: express.Response, __: express.NextFunction) {


    try {

        let userinfo = req.params;

        let data = await new model({
            uuid: userinfo.id,
            name: userinfo.name,
            email: userinfo.email,
            isPublic: true,




        }).save();
        return responseHandler(res, 201, "Success", JSON.parse(JSON.stringify({ data })), "User Data Successfuly Inseted")


    } catch (error) {
        return errorResponseHandler(res, 401, " Add User Something went wrong ", "Failed", error.message)

    }
}

export = {
    getUser,
    addUser

}