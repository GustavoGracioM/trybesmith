import express from 'express';
import productRouter from './router/productRouter';
import userRouter from './router/userRouter';
import orderRouter from './router/orderRouter';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(userRouter);
app.use(orderRouter);

export default app;
