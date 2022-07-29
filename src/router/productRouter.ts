import { Router } from 'express';
import ProductController from '../controllers/productController';
import validationCreateProduct from '../middlewares/productMiddlewares';

const router = Router();

const productController = new ProductController();

router.post('/products', validationCreateProduct, productController.create);
router.get('/products', productController.getAll);

export default router;