import { Request, Response, NextFunction } from 'express';
// import Joi from '@hapi/joi';


export function middlewareValidateObjectSchema(schema) {
    return (req: Request, res: Response, __: NextFunction) => {
        try {
            const result = schema.validate(req.body, { convert: false });


            if (result.error) {
                const details = result.error.details;
                const errorDetails = details.map(value => {
                    console.log("error", value.message,);
                    return res.status(422).json({
                        error: value.message,
                        path: value.path
                    })
                })
                return errorDetails;
            }
            return result;
        } catch (error) {
            console.log("something went wrong in joiMiddleware", error);
            throw new Error(error);

        }
    }
}
