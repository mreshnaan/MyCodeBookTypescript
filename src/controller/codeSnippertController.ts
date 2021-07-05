import express from "express";
import model from "../model/codeSnippertModel";
import { responseHandler, errorResponseHandler } from "../helper/customHandler";

async function getSnippert(_: express.Request, res: express.Response, __: express.NextFunction) {
    try {
        let data = await model.find({ isPublic: true }).populate('categories').populate('tags');
        return responseHandler(res, 201, "Success", JSON.parse(JSON.stringify({ data })), "Code Snippert Data Successfuly Retrieve")


    } catch (error) {
        return errorResponseHandler(res, 401, "Code Snippert Data Retrieve Failed", "Failed", error.message)
    }

}
async function addSnippert(req: express.Request, res: express.Response, __: express.NextFunction) {

    try {
        const snippert = req.body


        let data = await new model({
            name: snippert.name,
            language: snippert.language,
            isPublic: true,
        }).save();
        return responseHandler(res, 201, "Success", JSON.parse(JSON.stringify({ data })), "Code Snippert Data Successfuly Inseted")

    } catch (error) {
        return errorResponseHandler(res, 401, "Cant Add Code Snippert Something went wrong ", "Failed", error.message)
    }
}
async function updateSnippert(req: express.Request, res: express.Response, __: express.NextFunction) {
    try {
        const snippertId = req.params.id;
        const snippertBody = req.body

        const snippertData = await model.findById(snippertId)
        console.log("user :", snippertData);

        if (!snippertData) {
            throw new Error("Could not find Code Snippert");
        }


        const data = await model.findByIdAndUpdate(snippertId, snippertBody, { new: true });
        console.log("update Data : ", data);
        return responseHandler(res, 201, "Success", JSON.parse(JSON.stringify({ data })), "Code Snippert Data Successfuly Updated")

    } catch (error) {

        return errorResponseHandler(res, 401, "Cant Update Code Snippert Something went wrong ", "Failed", error.message)

    }

}
async function deleteSnippert(req: express.Request, res: express.Response, __: express.NextFunction) {
    try {
        const snippertId = req.params.id;


        const snippertData = await model.findById(snippertId)
        console.log("Code Snippert :", snippertData);
        if (!snippertData) {
            throw new Error("Could not find Code Snippert");
        }

        const data = await model.findByIdAndUpdate(snippertId, { isPublic: false }, { new: true });
        console.log("Delete Data : ", data);
        return responseHandler(res, 201, "Success", JSON.parse(JSON.stringify({ data })), "Code Snippert Data Successfuly Deleted")

    } catch (error) {

        return errorResponseHandler(res, 401, "Cant Delete Code Snippert Something went wrong ", "Failed", error.message)

    }

}
async function addTagToSnippert(req: express.Request, res: express.Response, __: express.NextFunction) {
    try {
        const { snippertId, tagId } = req.params;
        const snippertData = await model.findById(snippertId)
        console.log("Code Snippert :", snippertData);
        if (!snippertData) {
            throw new Error("Could not find Code Snippert");
        }

        const data = await model.findByIdAndUpdate(snippertId, { $push: { tags: tagId } }, { new: true, useFindAndModify: false });
        console.log("addTagToSnippert Data : ", data);
        return responseHandler(res, 201, "Success", JSON.parse(JSON.stringify({ data })), "Tag Data To Snippert Successfuly Inserted ")

    } catch (error) {

        return errorResponseHandler(res, 401, "Cant Insert Tag Data To Snippert Something went wrong ", "Failed", error.message)

    }

};

async function addCategoryToSnippert(req: express.Request, res: express.Response, __: express.NextFunction) {
    try {
        const { snippertId, categoryId } = req.params;
        const snippertData = await model.findById(snippertId)
        console.log("Code Snippert :", snippertData);
        if (!snippertData) {
            throw new Error("Could not find Code Snippert");
        }

        const data = await model.findByIdAndUpdate(snippertId, { $push: { categories: categoryId } }, { new: true, useFindAndModify: false });
        console.log("addTagToSnippert Data : ", data);
        return responseHandler(res, 201, "Success", JSON.parse(JSON.stringify({ data })), "Category Data To Snippert Successfuly Inserted ")

    } catch (error) {

        return errorResponseHandler(res, 401, "Cant Insert Category Data To Snippert Something went wrong ", "Failed", error.message)

    }

};



export = {
    getSnippert,
    addSnippert,
    updateSnippert,
    deleteSnippert,
    addTagToSnippert,
    addCategoryToSnippert
}
