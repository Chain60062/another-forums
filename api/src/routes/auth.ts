import Router from "@koa/router";
import { Context } from "koa";
import AuthController from "../controller/AuthController";
const authController = new AuthController();
const router = new Router();

router.post("/login", authController.login);
router.get("/login", (ctx: Context) => {
  ctx.body = "Login page";
});
router.post("/signup", authController.signup);
router.post("/logout", authController.logout);
export default router;
