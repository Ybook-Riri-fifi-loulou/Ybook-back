import {Router} from "express";
import {postController} from "./post.controller";

export const postRouter = Router();

postRouter.get('/', postController.getAllPosts);
postRouter.post('/', postController.createPost)
postRouter.put('/:id', postController.updatePost);
postRouter.delete('/:id', postController.deletePost);

postRouter.post('/like/', postController.newPostLike);

postRouter.get('/friends', postController.getFriendPosts);