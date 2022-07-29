import { Router } from 'express';
import OrderController from '../controllers/orderController';

const router = Router();

const path = '/orders';
const orderController = new OrderController();

router.get(path, orderController.getAll);

export default router;