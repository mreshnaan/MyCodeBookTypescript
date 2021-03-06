import express from "express";
import model from "../model/categoryModel";
import { responseHandler, errorResponseHandler } from "../helper/customHandler";


async function getCategories(_: express.Request, res: express.Response, __: express.NextFunction) {

    try {

        let data = await model.find({ isPublic: true }).populate('snipperts');
        return responseHandler(res, 201, "Success", JSON.parse(JSON.stringify({ data })), "Category Data Successfuly Retrieve")

    } catch (error) {
        return errorResponseHandler(res, 401, "Category Data Retrieve Failed", "Failed", error.message)

    }

}

async function addCategory(req: express.Request, res: express.Response, __: express.NextFunction) {


    try {


        let category = req.body;
        let data = await new model({

            name: category.name,
            snipperts: category.snipperts,
            isPublic: true,




        }).save();
        return responseHandler(res, 201, "Success", JSON.parse(JSON.stringify({ data })), "Category Data Successfuly Inseted")


    } catch (error) {
        return errorResponseHandler(res, 401, "Cant Add Category Something went wrong ", "Failed", error.message)

    }
}
async function updateCategory(req: express.Request, res: express.Response, __: express.NextFunction) {
    try {
        const categoryId = req.params.id;
        const categoryBody = req.body
        const categoryData = await model.findById(categoryId)
        console.log("user :", categoryData);
        if (!categoryData) {
            throw new Error("Could not find Category");
        }

        const data = await model.findByIdAndUpdate(categoryId, categoryBody, { new: true });
        console.log("update Data : ", data);
        return responseHandler(res, 201, "Success", JSON.parse(JSON.stringify({ data })), "Category Data Successfuly Updated")

    } catch (error) {

        return errorResponseHandler(res, 401, "Cant Update Category Something went wrong ", "Failed", error.message)

    }

}

async function deleteCategory(req: express.Request, res: express.Response, __: express.NextFunction) {
    try {
        const categoryId = req.params.id;

        const categoryData = await model.findById(categoryId)
        console.log("user :", categoryData);
        if (!categoryData) {
            throw new Error("Could not find Category");
        }

        const data = await model.findByIdAndUpdate(categoryId, { isPublic: false }, { new: true });
        console.log("update Data : ", data);
        return responseHandler(res, 201, "Success", JSON.parse(JSON.stringify({ data })), "Category Data Successfuly Updated")

    } catch (error) {

        return errorResponseHandler(res, 401, "Cant Update Category Something went wrong ", "Failed", error.message)

    }

}
async function addSnippertToCategory(req: express.Request, res: express.Response, __: express.NextFunction) {
    try {
        const { categoryId, snippertId } = req.params;
        const categoryData = await model.findById(categoryId)
        console.log("Category Data :", categoryData);
        if (!categoryData) {
            throw new Error("Could not find Category Data");
        }

        const data = await model.findByIdAndUpdate(categoryId, { $push: { snipperts: snippertId } }, { new: true, useFindAndModify: false });
        console.log("addSnippertToCategory Data : ", data);
        return responseHandler(res, 201, "Success", JSON.parse(JSON.stringify({ data })), "Snippert Data To Category Successfuly Inserted ")

    } catch (error) {

        return errorResponseHandler(res, 401, "Cant Insert Snippert Data To Category Something went wrong ", "Failed", error.message)

    }

};

export = {
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory,
    addSnippertToCategory
}