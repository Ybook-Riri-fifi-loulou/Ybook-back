import {PostCommentModel} from "./postComment.model";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

class PostCommentService{
    async createPostComment(postComment: PostCommentModel) {
        await prisma.postComment.create({
            data: {
                text: postComment.htmlContent,
                user: { connect: { id: postComment.userId } },
                post: { connect: { id: postComment.postId } },
            }
        })
        return postComment;
    }
}

export const postCommentService = new PostCommentService();