import { Response } from "express";

// interface IsResponseHapnler {
//     statusCode: number,
//     status: string,
//     data: JSON,
//     message: string
// }

// interface IsErrorResponseHapnler {
//     statusCode: number,
//     status: string,
//     message: string,
//     errorMessage: string
// }


export function responseHandler(
    res: Response,
    statusCode: number,
    statusMessage: string,
    data: JSON,
    message: string,
) {

    return res.status(201).send({
        status: statusMessage,
        statusCode: statusCode,
        data: data,
        message: message

    })



}


export function errorResponseHandler(
    res: Response,
    statusCode: number,
    status: string,
    message: string,
    errorMessage: string,


) {

    return res.status(401).send({
        status: status,
        statusCode: statusCode,
        message: message,
        errorMessage: errorMessage

    })


}