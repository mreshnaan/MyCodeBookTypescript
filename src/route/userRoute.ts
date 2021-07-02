import express from "express";
const router = express.Router();
import { checkIfAuthenticated } from "../middleware/firebaseAuth";
// import { middlewareValidateObjectSchema } from "../middleware/joiMiddleware";
// import validateSchema from "../validationSchemas/snippertSchema"
import controller from "../controller/userController";


router.get('/', checkIfAuthenticated, controller.getUser);
router.post('/:id', checkIfAuthenticated, controller.addUser);



export default router