import jwt from 'jsonwebtoken';
import { User } from '../interfaces/userInterface';
import connection from '../models/connection';
import UserModel from '../models/userModel';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create = async (user: User): Promise<string> => {
    const result = await this.model.create(user);
    const secret = process.env.SECRET || '12345';
    const token = jwt.sign({ data: result }, secret); 
    return token;
  };
}