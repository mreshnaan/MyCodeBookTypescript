import express from "express";
import model from "../model/tagsModel";
import { responseHandler, errorResponseHandler } from "../helper/customHandler";


async function getTags(_: express.Request, res: express.Response, __: express.NextFunction) {

    try {

        let data = await model.find({ isPublic: true }).populate('snipperts');
        return responseHandler(res, 201, "Success", JSON.parse(JSON.stringify({ data })), "Tags Data Successfuly Retrieve")

    } catch (error) {
        return errorResponseHandler(res, 401, "Tags Data Retrieve Failed", "Failed", error.message)

    }

}

async function addTag(req: express.Request, res: express.Response, __: express.NextFunction) {


    try {

        let tag = req.body;
        let data = await new model({

            name: tag.name,
            snipperts: tag.snipperts,
            isPublic: true,





        }).save();
        return responseHandler(res, 201, "Success", JSON.parse(JSON.stringify({ data })), "Tag Data Successfuly Inseted")


    } catch (error) {
        return errorResponseHandler(res, 401, "Cant Add Tag Something went wrong ", "Failed", error.message)

    }
}
async function updateTag(req: express.Request, res: express.Response, __: express.NextFunction) {
    try {
        const tagId = req.params.id;
        const tagBody = req.body
        const tagData = await model.findById(tagId)
        console.log("user :", tagData);
        if (!tagData) {
            throw new Error("Could not find tag");
        }

        const data = await model.findByIdAndUpdate(tagId, tagBody, { new: true });
        console.log("update Data : ", data);
        return responseHandler(res, 201, "Success", JSON.parse(JSON.stringify({ data })), "Tag Data Successfuly Updated")

    } catch (error) {

        return errorResponseHandler(res, 401, "Cant Update Tag Something went wrong ", "Failed", error.message)

    }

}

async function deleteTag(req: express.Request, res: express.Response, __: express.NextFunction) {
    try {
        const tagId = req.params.id;

        const tagData = await model.findById(tagId)
        console.log("user :", tagData);
        if (!tagData) {
            throw new Error("Could not find tag");
        }

        const data = await model.findByIdAndUpdate(tagId, { isPublic: false }, { new: true });
        console.log("update Data : ", data);
        return responseHandler(res, 201, "Success", JSON.parse(JSON.stringify({ data })), "Tag Data Successfuly Updated")

    } catch (error) {

        return errorResponseHandler(res, 401, "Cant Update Tag Something went wrong ", "Failed", error.message)

    }

}
// async function addSnippertToTag(req: express.Request, res: express.Response, __: express.NextFunction) {
//     try {
//         const { tagId, snippertId } = req.params;
//         const tagData = await model.findById(tagId)
//         console.log("Tag data :", tagData);
//         if (!tagData) {
//             throw new Error("Could not find Tag Data");
//         }

//         const data = await model.findByIdAndUpdate(tagId, { $push: { snipperts: snippertId } }, { new: true, useFindAndModify: false });
//         console.log("addSnippertToTag Data : ", data);
//         return responseHandler(res, 201, "Success", JSON.parse(JSON.stringify({ data })), "Snippert Data To Tag Successfuly Inserted ")

//     } catch (error) {

//         return errorResponseHandler(res, 401, "Cant Insert Snippert Data To Tag Something went wrong ", "Failed", error.message)

//     }

// };


export = {
    getTags,
    addTag,
    updateTag,
    deleteTag,
    // addSnippertToTag
}