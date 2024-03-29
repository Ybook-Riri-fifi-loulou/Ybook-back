import {Router} from "express";
import {postRouter} from "./Post/post.router";
import {userRouter} from "./User/user.router";
import {postCommentRouter} from "./PostComment/postComment.router";
import {postLikesRouter} from "./PostLikes/postLikes.router";
import {conversationRouter} from "./Conversation/conversation.router";
import {CheckTokenIsValid} from "./Common/idToken.middleware";
import {friendshipRouter} from "./Friendship/friendship.router";


export const appRouter = Router();

appRouter.use('/post',CheckTokenIsValid, postRouter);
appRouter.use('/user', userRouter);
appRouter.use('/postComments',CheckTokenIsValid, postCommentRouter);
appRouter.use('/postLikes',CheckTokenIsValid, postLikesRouter);
appRouter.use('conversation',CheckTokenIsValid, conversationRouter);
appRouter.use('/friendship',CheckTokenIsValid, friendshipRouter);
