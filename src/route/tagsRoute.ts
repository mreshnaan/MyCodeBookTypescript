import express from "express";
const router = express.Router();
import { checkIfAuthenticated } from "../middleware/firebaseAuth";
// import { middlewareValidateObjectSchema } from "../middleware/joiMiddleware";
// import validateSchema from "../validationSchemas/snippertSchema"
import controller from "../controller/tagsController";


router.get('/', controller.getTags);
router.post('/:id', controller.addTag);
router.put('/:id', controller.updateTag);
router.put('/:tagId/:snippertId', controller.addSnippertToTag);
router.patch('/:id', checkIfAuthenticated, controller.deleteTag);


export default router