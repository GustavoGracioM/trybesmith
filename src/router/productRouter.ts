import { Router } from 'express';
import ProductController from '../controllers/productController';
import validationCreateProduct from '../middlewares/productMiddlewares';

const router = Router();

const productController = new ProductController();

const path = '/products';

router.post(path, validationCreateProduct, productController.create);
router.get(path, productController.getAll);

export default router;