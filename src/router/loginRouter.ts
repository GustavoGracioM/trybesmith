import { Router } from 'express';
import LoginController from '../controllers/loginController';
import validationLogin from '../middlewares/loginMiddlewares';

const router = Router();

const loginController = new LoginController();

router.post('/login', validationLogin, loginController.login);

export default router;