"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PostService {
    getAllPosts(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.post.findMany({
                where: {
                    user: {
                        blockedByUsers: {
                            none: {
                                email: email
                            }
                        }
                    }
                },
                take: 30,
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
        });
    }
    getPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.post.findUnique({
                where: { id },
                include: { user: true, postLikes: true }
            });
        });
    }
    getUserPosts(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.post.findMany({
                where: { userId: id },
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
        });
    }
    createPost(post) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma.post.create({
                data: {
                    htmlContent: post.htmlContent,
                    user: { connect: { id: post.userId } },
                }
            });
            return post;
        });
    }
    updatePost(post) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma.post.update({
                where: { id: post.id },
                data: {
                    htmlContent: post.htmlContent,
                },
            });
            return post;
        });
    }
    deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma.post.delete({
                where: { id: id },
            });
            return;
        });
    }
    getFriendPosts(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = prisma.user.findUnique({
                where: { email: email },
                select: { id: true }
            });
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
        });
    }
    getLikesPosts(number) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.post.findMany({
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
            });
        });
    }
}
exports.postService = new PostService();
