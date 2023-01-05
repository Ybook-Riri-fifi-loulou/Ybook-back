import {NextFunction, Response, Request} from "express";
import {conversationService} from "./conversation.service";


class ConversationController {
    async getConversations (req: Request, res: Response, next: NextFunction) {
        res.json(await conversationService.getConversations(req.body))
    }

    async createConversation (req: Request, res: Response, next: NextFunction) {
        res.json(await conversationService.createConversation(req.body))
    }

    async deleteConversation (req: Request, res: Response, next: NextFunction) {
        res.json(await conversationService.deleteConversation(req.body))
    }

    async getConversationMessages (req: Request, res: Response, next: NextFunction) {
        res.json(conversationService.getConversationMessages(req.params.id))
    }

    async createConversationMessage (req: Request, res: Response, next: NextFunction) {
        res.json(await conversationService.createConversationMessage(req.body))
    }


}

export const conversationController = new ConversationController();