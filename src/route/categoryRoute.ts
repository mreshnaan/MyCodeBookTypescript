import express from "express";
const router = express.Router();
import { checkIfAuthenticated } from "../middleware/firebaseAuth";
// import { middlewareValidateObjectSchema } from "../middleware/joiMiddleware";
// import validateSchema from "../validationSchemas/snippertSchema"
import controller from "../controller/categoryController";


router.get('/', controller.getCategories);
router.post('/', controller.addCategory);
router.put('/:id', checkIfAuthenticated, controller.updateCategory);
router.patch('/:id', checkIfAuthenticated, controller.deleteCategory);


export default router