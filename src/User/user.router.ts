import {Router} from "express";
import {userController} from "./user.controller";
import {CheckTokenIsValid, idTokenMiddleware} from "../Common/idToken.middleware";


export const userRouter = Router();

userRouter.get('/',CheckTokenIsValid, userController.getAllUsers);
userRouter.get('/:id',CheckTokenIsValid, userController.getUserById);
userRouter.get('/:id', CheckTokenIsValid, userController.getUserPosts);
userRouter.post('/', idTokenMiddleware, userController.createUser);