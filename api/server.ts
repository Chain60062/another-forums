import koa, { Context } from "koa";
import koaBody from "koa-body";
import session from "koa-session";
import redisStore from "koa-redis";
import Redis from "ioredis";
import * as fs from "fs";
import * as logger from "koa-morgan";
import authRouter from "./routes/auth";
import indexRouter from "./routes/index";
import { isAuthenticated } from "./middleware/auth";
const secret: string = process.env.SECRET || "coperino";
const port = process.env.PORT || 8080;
import "dotenv/config";
const redis = new Redis();
const app = new koa();
// import * as createError from "http-errors";

const accessLogStream = fs.createWriteStream(__dirname + "/access.log", {
  flags: "a",
});
app.keys = [secret];
app.use(session(app));

app.use(
  session(
    {
      key: "sessionkey",
      maxAge: 5184000000,
      store: redisStore({
        host: "localhost",
        port: 6379,
        auth_pass: "RedisP@ssword123",
        client: redis,
      }),
    },
    app
  )
);
app.use(logger.default("combined", { stream: accessLogStream }));
app.use(koaBody());

// this._app.use(function (ctx: Context, next: Function) {
//   next(createError.default("404", "SNEED"));
// });
// Routes
app.use(authRouter.routes()).use(authRouter.allowedMethods());
app.use(indexRouter.routes()).use(indexRouter.allowedMethods());
app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});
// catch 404 and foward to error handler
