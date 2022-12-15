import {Router} from "express";
import {postRouter} from "./Post/post.router";
import {userRouter} from "./User/user.router";


export const appRouter = Router();

appRouter.use('/post', postRouter);
appRouter.use('/user', userRouter);
appRouter.use('/postComment', postRouter);
