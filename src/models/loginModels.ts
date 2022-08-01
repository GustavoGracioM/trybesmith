import { Pool } from 'mysql2/promise';
import Login from '../interfaces/loginInterface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public login = async (login: Login): Promise<Login[]> => {
    const sql = 'SELECT id, username FROM Trybesmith.Users WHERE username = ? AND password = ?;';
    const result = await this.connection.execute(sql, [login.username, login.password]);
    const [user] = result;
    return user as Login[];
  };
}