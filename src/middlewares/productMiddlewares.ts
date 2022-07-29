import { NextFunction, Request, Response } from 'express';
import Product from '../interfaces/productInterface';

const properties = ['name', 'amount'];

const validateProperties = (product: Product): [boolean, string | null] => {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(product, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null];
};

const validateValues = (prodcut: Product): [boolean, string | null] => {
  const entries = Object.entries(prodcut);
  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i];
    if (!value) {
      return [false, property];
    }
  }
  return [true, null];
};

const validationCreateProduct = (req: Request, res: Response, next: NextFunction) => {
  const product = req.body;
  let [valid, property] = validateProperties(product);
  if (!valid) {
    return res.status(400).json({ message: `O campo ${property} não pode ser nulo ou vazio.` });
  }
  [valid, property] = validateValues(product);

  if (!valid) {
    return res.status(400).json({ message: `O campo ${property} não pode ser nulo ou vazio.` });
  }
  
  next();
};

export default validationCreateProduct;