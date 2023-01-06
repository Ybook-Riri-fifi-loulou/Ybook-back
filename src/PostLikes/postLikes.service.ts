
import {PrismaClient} from "@prisma/client";
import { PostModel } from "../Post/post.model";
import {PostLikeModel} from "./postLikes.model";


const prisma = new PrismaClient()

class PostLikesService {

    async newPostLike(postLike: PostLikeModel) {
        await prisma.postLike.create({
            data: {
                user: { connect: { id: postLike.userId } },
                post: { connect: { id: postLike.postId } },
            }
        })
        return postLike;
    }

    async getLikePost() {
        return await prisma.postLike.findMany({
            include: {user: true}
        });
    }

    async getPostLikesByPostId(postId: number) {
        return await prisma.postLike.count({
            where: { postId: postId },
        })
    }

    async getLikeByPost(id : number) {
        await prisma.postLike.aggregate({
            _count: {
                id: true,
            },
            where: {
                id: id
            }
        })
    }

    async deletePostLike(id: number) {
        await prisma.postLike.delete({
            where: { id: id },
        })
        return;
    }

}

export const postLikesService = new PostLikesService();
