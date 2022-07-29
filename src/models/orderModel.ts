import { Pool } from 'mysql2/promise';
import Order from '../interfaces/orderInterface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<Order[]> => {
    const sql = 'SELECT * FROM Trybesmith.Orders';
    const result = await this.connection.execute(sql);
    const [orders] = result;
    return orders as Order[];
  };
}