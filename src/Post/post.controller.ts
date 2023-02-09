import { postService } from "./post.service";
import {NextFunction, Request, Response} from "express";
import {s3Service} from "../Common/s3.service";


class PostController{
    async getLikesPosts (req: Request, res: Response, next: NextFunction) {
        res.json(await postService.getLikesPosts(Number(req.params.id)))
    }

    async getAllPosts (req: Request, res: Response, next: NextFunction) {
        res.json(await postService.getAllPosts(res.locals.email))
    }

    async getUserPosts (req: Request, res: Response, next: NextFunction) {
        res.json(await postService.getUserPosts(Number(req.params.id)))
    }

    async getPostById (req: Request, res: Response, next: NextFunction) {
        res.json(await postService.getPostById(Number(req.params.id)))
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

    async presignedurl (req: Request, res: Response, next: NextFunction) {
        res.json(await s3Service.getSignedUrl())
    }

    async getSignedUrlGet (req: Request, res: Response, next: NextFunction) {
        res.json(await s3Service.getSignedUrlGet(req.query.key as string ?? "" ))
    }


    async getFriendPosts (req: Request, res: Response, next: NextFunction) {
        res.json(await postService.getFriendPosts(res.locals.email))
    }

}

export const postController = new PostController();
