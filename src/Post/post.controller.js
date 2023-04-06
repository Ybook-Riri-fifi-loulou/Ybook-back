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
exports.postController = void 0;
const post_service_1 = require("./post.service");
const s3_service_1 = require("../Common/s3.service");
class PostController {
    getLikesPosts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield post_service_1.postService.getLikesPosts(Number(req.params.id)));
        });
    }
    getAllPosts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield post_service_1.postService.getAllPosts(res.locals.email));
        });
    }
    getUserPosts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield post_service_1.postService.getUserPosts(Number(req.params.id)));
        });
    }
    getPostById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield post_service_1.postService.getPostById(Number(req.params.id)));
        });
    }
    createPost(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            res.json(yield post_service_1.postService.createPost(req.body));
        });
    }
    updatePost(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield post_service_1.postService.updatePost(req.body));
        });
    }
    deletePost(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield post_service_1.postService.deletePost(req.body.id));
        });
    }
    presignedurl(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield s3_service_1.s3Service.getSignedUrl());
        });
    }
    getSignedUrlGet(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield s3_service_1.s3Service.getSignedUrlGet((_a = req.query.key) !== null && _a !== void 0 ? _a : ""));
        });
    }
    getFriendPosts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield post_service_1.postService.getFriendPosts(res.locals.email));
        });
    }
}
exports.postController = new PostController();
