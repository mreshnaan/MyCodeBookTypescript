import express from "express";
const router = express.Router();
import { checkIfAuthenticated } from "../middleware/firebaseAuth";
// import { middlewareValidateObjectSchema } from "../middleware/joiMiddleware";
// import validateSchema from "../validationSchemas/snippertSchema"
import controller from "../controller/codeSnippertController";


router.get('/', controller.getSnippert);
router.post('/', controller.addSnippert);
router.put('/:id', controller.updateSnippert);
router.put('/:snippertId/:tagid', controller.addTagToSnippert);
router.put('/:snippertId/:categoryId', controller.addTagToSnippert);
router.patch('/:id', checkIfAuthenticated, controller.deleteSnippert);


export default router