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
exports.postCommentService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PostCommentService {
    createPostComment(postComment) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma.postComment.create({
                data: {
                    text: postComment.htmlContent,
                    user: { connect: { id: postComment.userId } },
                    post: { connect: { id: postComment.postId } },
                }
            });
            return postComment;
        });
    }
    getPostComments(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.postComment.findMany({
                where: { postId: id },
                include: { user: true }
            });
        });
    }
    deletePostComment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma.postComment.delete({
                where: { id: id },
            });
            return;
        });
    }
    updatePostComment(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma.postComment.update({
                where: { id: body.id },
                data: {
                    text: body.htmlContent,
                },
            });
            return;
        });
    }
}
exports.postCommentService = new PostCommentService();
