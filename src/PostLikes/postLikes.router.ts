import {Router} from "express";
import {postLikesController} from "./postLikes.controller";

export const postLikesRouter = Router();

postLikesRouter.get('/', postLikesController.getLikePost);
postLikesRouter.get('/:id', postLikesController.getLikePostById);
postLikesRouter.post('/', postLikesController.newPostLike);
postLikesRouter.delete('/', postLikesController.deletePostLike);
