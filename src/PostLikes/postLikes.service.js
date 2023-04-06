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
exports.postLikesService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PostLikesService {
    newPostLike(postLike) {
        return __awaiter(this, void 0, void 0, function* () {
            const checkIfPostLikeExist = yield prisma.postLike.findMany({
                where: {
                    userId: postLike.userId,
                    postId: postLike.postId
                }
            });
            if (checkIfPostLikeExist.length > 0) {
                yield this.deletePostLike(postLike.userId, postLike.postId);
                return postLike;
            }
            else {
                yield prisma.postLike.create({
                    data: {
                        user: { connect: { id: postLike.userId } },
                        post: { connect: { id: postLike.postId } },
                    }
                });
                return postLike;
            }
        });
    }
    getLikePost() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.postLike.findMany({
                select: {
                    user: {
                        select: {
                            id: true
                        }
                    }
                }
            });
        });
    }
    getPostLikesByPostId(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.postLike.count({
                where: { postId: postId },
            });
        });
    }
    getLikeByPost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.postLike.aggregate({
                _count: {
                    id: true,
                },
                where: {
                    id: id
                }
            });
        });
    }
    deletePostLike(userId, postId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma.postLike.deleteMany({
                where: {
                    userId,
                    postId
                }
            });
        });
    }
}
exports.postLikesService = new PostLikesService();
