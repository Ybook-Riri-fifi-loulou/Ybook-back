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
exports.postLikesController = void 0;
const postLikes_service_1 = require("./postLikes.service");
class PostLikesController {
    newPostLike(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield postLikes_service_1.postLikesService.newPostLike(req.body));
        });
    }
    getLikePost(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield postLikes_service_1.postLikesService.getLikePost());
        });
    }
    getLikePostById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield postLikes_service_1.postLikesService.getPostLikesByPostId(Number(req.params.id)));
        });
    }
    deletePostLike(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield postLikes_service_1.postLikesService.deletePostLike(Number(req.params.userId), Number(req.params.postId)));
        });
    }
}
exports.postLikesController = new PostLikesController();
