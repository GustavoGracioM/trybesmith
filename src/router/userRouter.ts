import { Router } from 'express';
import UserController from '../controllers/userController';
import validationCreateUser from '../middlewares/userMiddlewares';

const router = Router();

const path = '/users';
const userController = new UserController();

router.post(path, validationCreateUser, userController.create);

export default router;
