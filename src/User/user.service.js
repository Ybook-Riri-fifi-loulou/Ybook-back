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
exports.userService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class UserService {
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.findMany({
                include: { posts: true }
            });
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.user.findUnique({
                where: { email }
            });
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.findUnique({
                where: { id }
            });
        });
    }
    createUser(firstname, lastname, email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.create({
                data: {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                }
            });
        });
    }
    UpdateProfilePicture(id, image) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(image);
            return yield prisma.user.update({
                where: { id: Number(id) },
                data: { avatarS3Key: 'rifilou' }
            });
        });
    }
    updateProfil(id, firstname, lastname) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.update({
                where: { id },
                data: {
                    firstname,
                    lastname
                }
            });
        });
    }
}
exports.userService = new UserService();
