import { Context } from "koa";
import IThreadRepository from "../repositories/IThreadRepository";
import ThreadRepository from "../repositories/ThreadRepository";

export default class UserController {
  private _repo : IThreadRepository;
  constructor() {
    this._repo = new ThreadRepository();
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
