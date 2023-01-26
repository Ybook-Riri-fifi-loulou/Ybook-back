import {Router} from "express";
import {postLikesController} from "./postLikes.controller";

export const postLikesRouter = Router();

postLikesRouter.get('/', postLikesController.getLikePost);
postLikesRouter.get('/:id', postLikesController.getLikePostById);
postLikesRouter.patch('/', postLikesController.newPostLike);
postLikesRouter.delete('/:userId/:postId', postLikesController.deletePostLike);
