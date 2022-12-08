import { Context } from "koa";
import IUserRepository from "../repositories/IUserRepository";
import UserRepository from "../repositories/UserRepository";

export default class UserController {
  private _repo: IUserRepository;
  constructor() {
    this._repo = new UserRepository();
    this.getUser = this.getUser.bind(this)
  }
  public getUser(ctx: Context): void {
    // let id : any = ctx.request.query.id;
    // this._repo.findOneAsync(id);
    try {
      console.log(this._repo);
    } catch (error) {
      console.log(error);
    }
  }
  public deleteUser(ctx: Context): void {
    let id: any = ctx.request.query.id;
    this._repo.deleteAsync(id);
  }
  public updateUser(ctx: Context): void {
    let id: any = ctx.request.query.id;
    let body = ctx.request.body;
    this._repo.updateAsync(id, body);
  }
}
