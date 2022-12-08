import Router from "@koa/router";
import { Context } from "koa";
import UserController from "../controller/UserController";
import { isAuthenticated } from "../middleware/auth";
const userController = new UserController();

const router = new Router();

// router.get("/", userController.getUser);
router.get("/", isAuthenticated, (ctx: Context)=>{
    ctx.body = "Root";
})

export default router;
