import {postCommentService} from "./postComment.service";
import {NextFunction, Response, Request} from "express";

class PostCommentController{
    async createPostComment (req: Request, res: Response, next: NextFunction) {
        res.json(await postCommentService.createPostComment(req.body))
    }
}


export const postCommentController = new PostCommentController();