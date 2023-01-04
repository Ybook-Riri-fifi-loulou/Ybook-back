import {postCommentService} from "./postComment.service";
import {NextFunction, Response, Request} from "express";

class PostCommentController{
    async createPostComment (req: Request, res: Response, next: NextFunction) {
        res.json(await postCommentService.createPostComment(req.body))
    }

    async getPostComments (req: Request, res: Response, next: NextFunction) {
        res.json(await postCommentService.getPostComments(req.body.id))
    }

    async deletePostComment (req: Request, res: Response, next: NextFunction) {
        res.json(await postCommentService.deletePostComment(req.body.id))
    }

    async updatePostComment (req: Request, res: Response, next: NextFunction) {
        res.json(await postCommentService.updatePostComment(req.body))
    }
}


export const postCommentController = new PostCommentController();
