import {Router} from "express";
import {postController} from "./post.controller";
import {userController} from "../User/user.controller";
import {userRouter} from "../User/user.router";

export const postRouter = Router();

postRouter.get('/:id/posts', postController.getUserPosts);
postRouter.get('/:id/likes', postController.getLikesPosts);
postRouter.get('/', postController.getAllPosts);
postRouter.get('/:id', postController.getPostById);
postRouter.post('/', postController.createPost);
postRouter.put('/:id', postController.updatePost);
postRouter.delete('/:id', postController.deletePost);
postRouter.get('/presignedurl', postController.presignedurl);

postRouter.get('/friends', postController.getFriendPosts);
