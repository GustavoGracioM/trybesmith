import express from 'express';
import productRouter from './router/productRouter';
import userRouter from './router/userRouter';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(userRouter);

export default app;
