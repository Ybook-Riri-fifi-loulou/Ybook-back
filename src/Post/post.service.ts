import {PrismaClient} from '@prisma/client'
import {PostModel} from "./post.model";
import {PostLikeModel} from "../PostLikes/postLikes.model";

const prisma = new PrismaClient()

class PostService {
    async getAllPosts() {
        return prisma.post.findMany({
            take: 10,
            include: {user: true, postLikes: true}
        })
    }

    async createPost(post: PostModel) {
        await prisma.post.create({
            data: {
                htmlContent: post.htmlContent,
                user: { connect: { id: post.userId } },
            }
        })
        return post;
    }
    async updatePost(post: PostModel) {
        await prisma.post.update({
            where: { id: post.id },
            data: {
                htmlContent: post.htmlContent,
            },
        })
        return post;
    }
    async deletePost(id: number) {
        await prisma.post.delete({
            where: { id: id },
        })
        return;
    }


    async newPostLike(postLike: PostLikeModel) {
        await prisma.postLike.create({
            data: {
                user: { connect: { id: postLike.userId } },
                post: { connect: { id: postLike.postId } },
            }
        })
        return postLike;
    }

    async getFriendPosts() {
            //besoin de recupere le user connecter, la liste des amis et les poste de la liste d'amis

    }

}

export const postService = new PostService();
