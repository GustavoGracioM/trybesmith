import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User } from '../interfaces/userInterface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (user: User): Promise<User> => {
    const { username, classe, level, password } = user;
    const sql = `
      INSERT INTO Trybesmith.Users (username, classe, level, password) 
      VALUES (?,?,?,?);`;
    const result = await this
      .connection.execute<ResultSetHeader>(sql, [username, classe, level, password]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  };
}