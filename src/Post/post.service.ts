import {PrismaClient} from "@prisma/client"
import {PostModel} from "./post.model";
import AWS from "aws-sdk";

const prisma = new PrismaClient()

class PostService {
    async getAllPosts(email: string) {

        return prisma.post.findMany({
            where: {
                user: {
                    blockedByUsers:{
                        none:{
                            email: email
                        }
                    }
                }
            },
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
            },
            orderBy: [
                {
                    createdAt: 'desc'
                }
            ],
        });

        // return prisma.post.findMany({
        //     where: {
        //         NOT: {
        //             user: {
        //                 email: {
        //                     in: blockedUsersEmails
        //                 }
        //             }
        //         }
        //     },
        //     take: 30,
        //     include: {
        //         user: true,
        //         postLikes: true,
        //         postComments: {
        //             include: {
        //                 user: {
        //                     select: {
        //                         firstname: true,
        //                         lastname: true
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // })
    }

    async getPostById(id: number) {
        return prisma.post.findUnique({
            where: {id},
            include: {user: true, postLikes: true}
        })
    }

    async getUserPosts(id: number) {
        return await prisma.post.findMany({
            where: {userId: id},
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
        });
    }

    async createPost(post: PostModel) {
        await prisma.post.create({
            data: {
                htmlContent: post.htmlContent,
                user: {connect: {id: post.userId}},
            }
        })
        return post;
    }

    async updatePost(post: PostModel) {
        await prisma.post.update({
            where: {id: post.id},
            data: {
                htmlContent: post.htmlContent,
            },
        })
        return post;
    }

    async deletePost(id: number) {
        await prisma.post.delete({
            where: {id: id},
        })
        return;
    }


    async getFriendPosts(email: string) {
        let userId = prisma.user.findUnique({
            where: {email: email},
            select: {id: true}
        })



        // const post = await prisma.post.findMany({
        //     where: {
        //         user: {
        //             AND: [
        //                 {
        //                     OR: [
        //                         {
        //                             fromFriendship: {
        //                                 some: {
        //                                     OR: [
        //                                         {
        //                                             toId: userId,
        //                                         },
        //                                         {
        //                                             fromId: userId,
        //                                         },
        //                                     ],
        //                                 },
        //                             },
        //                         },
        //                         {
        //                             toFrienship: {
        //                                 some: {
        //                                     OR: [
        //                                         {
        //                                             toId: userId,
        //                                         },
        //                                         {
        //                                             fromId: userId,
        //                                         },
        //                                     ],
        //                                 },
        //                             },
        //                         },
        //                     ],
        //                 },
        //                 {
        //                     id: {
        //                         not: userId,
        //                     },
        //                 },
        //             ],
        //         },
        //     },
        //     include: {
        //         _count: {
        //             select: {
        //                 postLikes: true,
        //                 postComments: true,
        //             },
        //         },
        //         postAttachments: {
        //             select: {
        //                 s3Key: true,
        //                 type: true,
        //             },
        //         },
        //     },
        // });
    }

    async getLikesPosts(number: number) {
        return await prisma.post.findMany({
            where: {
                postLikes: {
                    some: {
                        userId: number
                    }
                }
            },
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
}

export const postService = new PostService();
