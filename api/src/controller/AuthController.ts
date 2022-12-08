import UserRepository from "../repositories/UserRepository";
import IUserRepository from "../repositories/IUserRepository";
import { Context } from "koa";
import { ContextSession } from "koa-session";
import * as argon2 from "argon2";
import * as crypto from "crypto";
import "dotenv/config";

export default class AuthController {
  private readonly _userRepo: IUserRepository;
  constructor() {
    this._userRepo = new UserRepository();
  }
  // Register
  signup = async (ctx: Context) => {
    try {
      crypto.randomBytes(16, (err, salt) => {
        if (err) throw err;

        argon2
          .hash(ctx.request.body.password, {
            parallelism: 1,
            memoryCost: 64_000, //64mb
            timeCost: 3, //iterations
            type: argon2.argon2id,
            salt,
          })
          .then(async (hash) => {
            const user = await this._userRepo.createAsync({
              name: ctx.request.body.name,
              email: ctx.request.body.email,
              role: ctx.request.body.role,
              hashedPassword: hash,
            });
          });
      });
      // console.log(user);
      ctx.status = 200;
    } catch (err: unknown) {
      ctx.status = 409;
      if (err instanceof Error) console.log(err.message);
    }
  };
  // Login
  login = async (ctx: Context): Promise<void> => {
    try {
      const user = await this._userRepo.findOneAsync(ctx.request.body.email);

      if (user === null) {
        ctx.status = 400;
        console.log("Usuário ou senha incorreto(s).");
      } else {
        argon2.verify(user.hashedPassword, ctx.request.body.password, {
          parallelism: 1,
          memoryCost: 64_000, //64mb
          timeCost: 3, //iterations
          type: argon2.argon2id,
        });
        ctx.session!.user = user;
        ctx.status = 200;
        ctx.body = user
      }
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
    }
  };
  logout = async (ctx: Context) => {
    if (ctx.session!.user) {
      ctx.session = null;
    }
    ctx.redirect("/");
  };
}
