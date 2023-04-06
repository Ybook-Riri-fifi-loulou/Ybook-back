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
exports.friendshipController = void 0;
const friendship_service_1 = require("./friendship.service");
class FriendshipController {
    getFriendshipsTo(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield friendship_service_1.friendshipService.getPendingFriendshipsTo(Number(req.params.id)));
        });
    }
    getFriendshipsFrom(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield friendship_service_1.friendshipService.getPendingFriendshipsFrom(Number(req.params.id)));
        });
    }
    getFriends(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield friendship_service_1.friendshipService.getFriends(Number(req.params.id)));
        });
    }
    acceptFriendship(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield friendship_service_1.friendshipService.acceptFriendship(Number(req.params.id)));
        });
    }
    declineFriendship(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield friendship_service_1.friendshipService.declineFriendship(Number(req.params.id)));
        });
    }
    deleteFriendship(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield friendship_service_1.friendshipService.deleteFriendship(Number(req.params.id)));
        });
    }
    addFrienship(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield friendship_service_1.friendshipService.addFriendship(req.params.userFromEmail, req.params.userToEmail));
        });
    }
}
exports.friendshipController = new FriendshipController();
