import {Router} from "express";
import {postLikesController} from "./postLikes.controller";

export const postLikesRouter = Router();

postLikesRouter.get('/', postLikesController.getLikePost);
postLikesRouter.post('/', postLikesController.newPostLike);
postLikesRouter.delete('/', postLikesController.deletePostLike);
