import express from 'express';
import productRouter from './router/productRouter';
import userRouter from './router/userRouter';
import orderRouter from './router/orderRouter';
import loginRouter from './router/loginRouter';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(userRouter);
app.use(orderRouter);
app.use(loginRouter);

export default app;
