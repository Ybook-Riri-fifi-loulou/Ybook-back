import {UserModel} from "../User/user.model";


export interface Conversation {
    id: number;
    fromId: number;
    toId: number;
}


export interface ConversationMessage {
    id: number;
    conversationId: number;
    userId: number;
    content: string;
}