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
exports.conversationController = void 0;
const conversation_service_1 = require("./conversation.service");
class ConversationController {
    getConversations(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield conversation_service_1.conversationService.getConversations(req.body));
        });
    }
    createConversation(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield conversation_service_1.conversationService.createConversation(req.body));
        });
    }
    deleteConversation(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield conversation_service_1.conversationService.deleteConversation(req.body));
        });
    }
    getConversationMessages(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(conversation_service_1.conversationService.getConversationMessages(req.params.id));
        });
    }
    createConversationMessage(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield conversation_service_1.conversationService.createConversationMessage(req.body));
        });
    }
}
exports.conversationController = new ConversationController();
