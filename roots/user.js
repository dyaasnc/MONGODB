import { Router } from "express";
import { createUser } from "../controler/user.js"

const userRouter = Router();

userRouter.post("/register", createUser);

export default userRouter;