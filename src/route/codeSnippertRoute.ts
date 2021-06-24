import express from "express";
const router = express.Router();
import { checkIfAuthenticated } from "../middleware/firebaseAuth";
// import { middlewareValidateObjectSchema } from "../middleware/joiMiddleware";
// import validateSchema from "../validationSchemas/snippertSchema"
import controller from "../controller/codeSnippertController";


router.get('/', controller.getSnippert);
router.post('/', controller.addSnippert);
router.put('/:id', checkIfAuthenticated, controller.updateSnippert);
router.patch('/:id', checkIfAuthenticated, controller.deleteSnippert);


export default router