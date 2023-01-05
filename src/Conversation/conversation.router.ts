import {Router} from "express";
import {conversationController} from "./conversation.controller";


export const conversationRouter = Router();

conversationRouter.get('/', conversationController.getConversations);
conversationRouter.post('/', conversationController.createConversation);
conversationRouter.delete('/', conversationController.deleteConversation);
conversationRouter.get('/:id', conversationController.getConversationMessages);
conversationRouter.post('/message', conversationController.createConversationMessage);