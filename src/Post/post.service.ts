import {PrismaClient} from "@prisma/client"
import {PostModel} from "./post.model";
import {PostLikeModel} from "../PostLikes/postLikes.model";

const prisma = new PrismaClient()

class PostService {
    async getAllPosts() {
        return prisma.post.findMany({
            take: 10,
            include: {
                user: true,
                postLikes: true,
                postComments: {
                    include: {
                        user: {
                            select: {
                                firstname: true,
                                lastname: true
                            }
                        }
                    }
                }
            }
        })
    }

    async getPostById(id : number) {
        return prisma.post.findUnique({
            where: {id},
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


    // async newPostLike(postLike: PostLikeModel) {
    //     await prisma.postLike.create({
    //         data: {
    //             user: { connect: { id: postLike.userId } },
    //             post: { connect: { id: postLike.postId } },
    //         }
    //     })
    //     return postLike;
    // }

    async getFriendPosts(email: string) {
        let userId = prisma.user.findUnique({
            where: { email: email },
            select: { id: true }
        })


        return await prisma.post.findMany({
            where: {
                user: {
                    AND: [
                        {
                            OR: [
                                {
                                    fromFriendship: {
                                        some: {
                                            OR: [
                                                {
                                                    toId: userId,
                                                },
                                                {
                                                    fromId: userId,
                                                },
                                            ],
                                        },
                                    },
                                },
                                {
                                    toFrienship: {
                                        some: {
                                            OR: [
                                                {
                                                    toId: userId,
                                                },
                                                {
                                                    fromId: userId,
                                                },
                                            ],
                                        },
                                    },
                                },
                            ],
                        },
                        {
                            id: {
                                not: userId,
                            },
                        },
                    ],
                },
            },
            include: {
                _count: {
                    select: {
                        postLikes: true,
                        postComments: true,
                    },
                },
                postAttachments: {
                    select: {
                        s3Key: true,
                        type: true,
                    },
                },
            },
        });
    }

}

export const postService = new PostService();
