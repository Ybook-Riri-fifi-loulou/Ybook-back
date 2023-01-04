import { postService } from "./post.service";
import {NextFunction, Request, Response} from "express";


class PostController{
    async getAllPosts (req: Request, res: Response, next: NextFunction) {
        res.json(await postService.getAllPosts())
    }

    async createPost (req: Request, res: Response, next: NextFunction) {
        console.log(req.body)
        res.json(await postService.createPost(req.body))
    }

    async updatePost (req: Request, res: Response, next: NextFunction) {
        res.json(await postService.updatePost(req.body))
    }

    async deletePost (req: Request, res: Response, next: NextFunction) {
        res.json(await postService.deletePost(req.body.id))
    }

    async newPostLike (req: Request, res: Response, next: NextFunction) {
        res.json(await postService.newPostLike(req.body))
    }



    async getFriendPosts (req: Request, res: Response, next: NextFunction) {
        res.json(await postService.getFriendPosts())
    }

}

export const postController = new PostController();
