import {PrismaClient} from "@prisma/client";
import {Conversation, ConversationMessage} from "./conversation.model";

const prisma = new PrismaClient();

class ConversationService {
    async getConversations(id: number) {
        return await prisma.conversation.findMany({
            where: {
                OR: [
                    {fromId: id,}
                    , {toId: id}
                ],
            }
        });
    }

    async createConversation(conversation: Conversation) {
        return await prisma.conversation.create({
            data: {
                fromId: conversation.fromId,
                toId: conversation.toId,
            }
        });
    }

    async deleteConversation(id: number) {
        return await prisma.conversation.delete({
            where: {
                id: id
            }
        });
    }

    getConversationMessages(conversation: string) {
        let id = parseInt(conversation)
        return prisma.conversationMessage.findMany({
            where: {
                conversationId: id
            }
        });

    }

    async createConversationMessage(message: ConversationMessage) {
        return await prisma.conversationMessage.create({
            data: {
                conversationId: message.conversationId,
                userId: message.userId,
                content: message.content
            }
        });
    }
}


export const conversationService = new ConversationService();
