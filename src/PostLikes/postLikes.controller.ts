import {postLikesService} from "./postLikes.service";
import {NextFunction, Request, Response} from "express";

class PostLikesController {
    async newPostLike(req: Request, res: Response, next: NextFunction) {
        res.json(await postLikesService.newPostLike(req.body))
    }

    async getLikePost(req: Request, res: Response, next: NextFunction) {
        res.json(await postLikesService.getLikePost())
    }

    async getLikePostById(req: Request, res: Response, next: NextFunction) {
        res.json(await postLikesService.getPostLikesByPostId(Number(req.params.id)))
    }

    async deletePostLike(req: Request, res: Response, next: NextFunction) {
        res.json(await postLikesService.deletePostLike(req.body.id))
    }
}

export const postLikesController = new PostLikesController();
