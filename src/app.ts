import express from 'express';
import productRouter from './router/productRouter';

const app = express();

app.use(express.json());
app.use(productRouter);

export default app;
