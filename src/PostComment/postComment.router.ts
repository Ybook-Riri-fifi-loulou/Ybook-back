import {Router} from "express";
import {postCommentController} from "./postComment.controller";

export const postCommentRouter = Router();

postCommentRouter.get('/', postCommentController.createPostComment);
