import {Router} from "express";
import {postRouter} from "./Post/post.router";
import {userRouter} from "./User/user.router";
import {postCommentRouter} from "./PostComment/postComment.router";
import {postLikesRouter} from "./PostLikes/postLikes.router";
import {conversationRouter} from "./Conversation/conversation.router";


export const appRouter = Router();

appRouter.use('/post', postRouter);
appRouter.use('/user', userRouter);
appRouter.use('/postComment', postCommentRouter);
appRouter.use('/postLikes', postLikesRouter);
appRouter.use('conversation', conversationRouter);