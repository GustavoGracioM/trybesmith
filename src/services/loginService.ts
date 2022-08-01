import jwt from 'jsonwebtoken';
import Login from '../interfaces/loginInterface';
import connection from '../models/connection';
import LoginModel from '../models/loginModels';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public login = async (login: Login) => {
    const [user] = await this.model.login(login);
    if (!user) return null;
    const secret = process.env.SECRET || '12345';
    const token = jwt.sign({ data: { username: user.username, id: user.id } }, secret); 
    return token;
  };
}