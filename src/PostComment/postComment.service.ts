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

    async getPostComments(id: number) {
        return await prisma.postComment.findMany({
            where: { postId: id },
            include: {user: true}
        });
    }

    async deletePostComment(id: number) {
        await prisma.postComment.delete({
            where: { id: id },
        })
        return;
    }

    async updatePostComment(body: PostCommentModel) {
        await prisma.postComment.update({
            where: { id: body.id },
            data: {
                text: body.htmlContent,
            },
        })
        return;

    }
}

export const postCommentService = new PostCommentService();
