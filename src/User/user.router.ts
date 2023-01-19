import {Router} from "express";
import {userController} from "./user.controller";
import {idTokenMiddleware} from "../Common/idToken.middleware";


export const userRouter = Router();

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:email', userController.getUserByEmail)
userRouter.get('/:id', userController.getUserById);
userRouter.get('/:id', userController.getUserPosts);
userRouter.post('/', idTokenMiddleware, userController.createUser);