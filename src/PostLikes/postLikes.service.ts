
import { PrismaClient } from "@prisma/client";
import { PostModel } from "../Post/post.model";
import { UserModel } from "../User/user.model";
import { PostLikeModel } from "./postLikes.model";


const prisma = new PrismaClient()

class PostLikesService {

    async newPostLike(postLike: PostLikeModel) {
        const checkIfPostLikeExist = await prisma.postLike.findMany({
            where: {
                userId: postLike.userId,
                postId: postLike.postId
            }
        });

        if(checkIfPostLikeExist.length > 0) {
            await this.deletePostLike(postLike.userId, postLike.postId);
            return postLike
        } else {
            await prisma.postLike.create({
                data: {
                    user: { connect: { id: postLike.userId } },
                    post: { connect: { id: postLike.postId } },
                }
            })

            return postLike
        }
    }

    async getLikePost() {
        return await prisma.postLike.findMany({
            include: { user: true }
        });
    }

    async getPostLikesByPostId(postId: number) {
        return await prisma.postLike.count({
            where: { postId: postId },
        })
    }

    async getLikeByPost(id: number) {
        return await prisma.postLike.aggregate({
            _count: {
                id: true,
            },
            where: {
                id: id
            }
        })
    }

    async deletePostLike(userId: number, postId: number) {
        await prisma.postLike.deleteMany({
            where: {
                userId,
                postId
            }
        })
    }
}

export const postLikesService = new PostLikesService();
