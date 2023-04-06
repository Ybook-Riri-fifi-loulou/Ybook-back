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
exports.conversationService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ConversationService {
    getConversations(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.conversation.findMany({
                where: {
                    OR: [
                        { fromId: id, },
                        { toId: id }
                    ],
                }
            });
        });
    }
    createConversation(conversation) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.conversation.create({
                data: {
                    fromId: conversation.fromId,
                    toId: conversation.toId,
                }
            });
        });
    }
    deleteConversation(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.conversation.delete({
                where: {
                    id: id
                }
            });
        });
    }
    getConversationMessages(conversation) {
        let id = parseInt(conversation);
        return prisma.conversationMessage.findMany({
            where: {
                conversationId: id
            }
        });
    }
    createConversationMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.conversationMessage.create({
                data: {
                    conversationId: message.conversationId,
                    userId: message.userId,
                    content: message.content
                }
            });
        });
    }
}
exports.conversationService = new ConversationService();
