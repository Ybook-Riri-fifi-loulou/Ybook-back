import {Router} from "express";
import {userController} from "./user.controller";


export const userRouter = Router();

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.get('/:id', userController.getUserPosts);
userRouter.post('/', userController.createUser);