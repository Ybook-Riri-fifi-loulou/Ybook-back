import {Router} from "express";
import {userController} from "./user.controller";
import {CheckTokenIsValid, idTokenMiddleware} from "../Common/idToken.middleware";


export const userRouter = Router();

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:email', userController.getUserByEmail)
userRouter.get('/:id', userController.getUserById);
userRouter.post('/', idTokenMiddleware, userController.createUser);
userRouter.put('/:id/profilePicture', userController.UpdateProfilePicture);