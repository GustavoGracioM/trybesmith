import Order from '../interfaces/orderInterface';
import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import ProductModel from '../models/productModel';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async (): Promise<Order[]> => {
    const orders = await this.model.getAll();
    const productModel = new ProductModel(connection);
    const products = await productModel.getAll();
    const ordersProducts = orders.map((op) => (
      { ...op, productsIds: products.map((p) => (p.orderId === op.id ? p.id : false)) }));
    const result = ordersProducts.map((op) => (
      { ...op, productsIds: op.productsIds.filter((rr) => rr !== false) }));
    return result as Order[];
  };
}