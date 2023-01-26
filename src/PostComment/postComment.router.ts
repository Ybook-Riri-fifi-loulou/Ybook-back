import {Router} from "express";
import {postCommentController} from "./postComment.controller";

export const postCommentRouter = Router();

postCommentRouter.post('/', postCommentController.createPostComment);
postCommentRouter.get('/:id', postCommentController.getPostComments)
postCommentRouter.delete('/:id', postCommentController.deletePostComment);
postCommentRouter.put('/:id', postCommentController.updatePostComment);
