import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export default class LoginController {
  constructor(private loginService = new LoginService()) { }

  public login = async (req: Request, res: Response) => {
    const user = req.body;
    const result = await this.loginService.login(user);
    if (!result) return res.status(401).json({ message: 'Username or password invalid' });
    res.status(200).json({ token: result });
  };
}