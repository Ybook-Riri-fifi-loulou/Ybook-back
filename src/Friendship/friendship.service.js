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
exports.friendshipService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class FriendshipService {
    getPendingFriendshipsTo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.friendship.findMany({
                where: {
                    AND: [
                        {
                            toId: id,
                        },
                        {
                            status: "PENDING",
                        },
                    ],
                },
                include: {
                    to: true,
                    from: true,
                }
            });
        });
    }
    getPendingFriendshipsFrom(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.friendship.findMany({
                where: {
                    AND: [
                        {
                            fromId: id,
                        },
                        {
                            status: "PENDING",
                        },
                    ],
                },
                include: {
                    to: true,
                    from: true,
                }
            });
        });
    }
    declineFriendship(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.friendship.update({
                where: {
                    id: id
                },
                data: {
                    status: "IGNORED"
                }
            });
        });
    }
    acceptFriendship(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.friendship.update({
                where: {
                    id: id
                },
                data: {
                    status: "ACCEPTED"
                }
            });
        });
    }
    getFriends(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.friendship.findMany({
                where: {
                    AND: [
                        {
                            OR: [
                                { fromId: id },
                                { toId: id }
                            ],
                        },
                        {
                            status: "ACCEPTED",
                        },
                    ],
                },
                include: {
                    to: true,
                    from: true,
                }
            });
        });
    }
    deleteFriendship(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.friendship.deleteMany({
                where: {
                    id: id
                }
            });
        });
    }
    addFriendship(userFromEmail, userToEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.friendship.create({
                data: {
                    from: { connect: { email: userFromEmail } },
                    to: { connect: { email: userToEmail } },
                    status: 'PENDING'
                }
            });
        });
    }
}
exports.friendshipService = new FriendshipService();
