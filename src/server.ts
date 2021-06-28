import express, { NextFunction } from "express";
import cors from "cors";
import { responseHandler, errorResponseHandler } from "../src/helper/customHandler";
import config from "../src/helper/serverConfig";
const app = express();

// routes import
import snippertRoute from "./route/codeSnippertRoute"
import tagsRoute from "./route/tagsRoute"
import categoryRoute from "./route/categoryRoute"

//connect to database
import { dbConnection } from './utils/dbConnection';
dbConnection();




app.use(express.json());
app.use(cors());


const apiPrefix = "/api/v1/";
app.use(`${apiPrefix}snippert`, snippertRoute);
app.use(`${apiPrefix}tag`, tagsRoute);
app.use(`${apiPrefix}category`, categoryRoute);

app.get("/", (_: express.Request, res: express.Response, __: NextFunction) => {

    return responseHandler(res, 201, "Success", JSON.parse(JSON.stringify({ data: "hellow" })), "Data Successfuly Retrieve")


})

app.use((_: express.Request, res: express.Response, __: NextFunction) => {
    const error = new Error('not found');
    return errorResponseHandler(res, 401, "opps, something went wrong", "Failed", error.message)

})

app.listen(config.server.port, () => console.log(`Server runing on ${config.server.hostname}:${config.server.port}`))