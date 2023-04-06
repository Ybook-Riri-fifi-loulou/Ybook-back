"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCommentRouter = void 0;
const express_1 = require("express");
const postComment_controller_1 = require("./postComment.controller");
exports.postCommentRouter = (0, express_1.Router)();
exports.postCommentRouter.post('/', postComment_controller_1.postCommentController.createPostComment);
exports.postCommentRouter.get('/:id', postComment_controller_1.postCommentController.getPostComments);
exports.postCommentRouter.delete('/:id', postComment_controller_1.postCommentController.deletePostComment);
exports.postCommentRouter.put('/:id', postComment_controller_1.postCommentController.updatePostComment);