import express from "express";
import {registerUser,verifyUser,getUserInfo} from "../Controllers/user.controller.js"
import {auth} from "../Middlewares/auth.middleware.js"

const userRouter = express.Router();
userRouter.post("/user/register", registerUser);
userRouter.post("/user/verify", verifyUser);
userRouter.post("/user/:id",auth, getUserInfo);

export default userRouter;
