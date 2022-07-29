import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/productInterface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (prodcut: Product): Promise<Product> => {
    const { name, amount } = prodcut;
    const sql = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?);';
    const result = await this.connection.execute<ResultSetHeader>(sql, [name, amount]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...prodcut };
  };

  public getAll = async (): Promise<Product[]> => {
    const sql = 'SELECT * FROM Trybesmith.Products;';
    const result = await this.connection.execute(sql);
    const [products] = result;
    return products as Product[];
  };
}