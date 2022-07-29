import Product from '../interfaces/productInterface';
import connection from '../models/connection';
import ProductModel from '../models/productModel';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create = async (product: Product): Promise<Product> => {
    const result = await this.model.create(product);
    return result;
  };

  public getAll = async (): Promise<Product[]> => {
    const products = await this.model.getAll();
    return products;
  };
}