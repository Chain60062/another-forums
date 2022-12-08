import { Context } from "koa";

export const isAuthenticated = (ctx: Context, next: Function) => {
  if (ctx.session!.user) {
    ctx.redirect("/");
    next();
  } else {
    ctx.status = 401;
    console.log("Sem permissões");
    // ctx.redirect("/login");
    const err = new Error("Usuário não autenticado.");
    next(err);
  }
};
