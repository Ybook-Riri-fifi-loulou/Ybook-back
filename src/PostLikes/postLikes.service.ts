
import {PrismaClient} from "@prisma/client";
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

    async deletePostLike(id: number) {
        await prisma.postLike.delete({
            where: { id: id },
        })
        return;
    }

}

export const postLikesService = new PostLikesService();
