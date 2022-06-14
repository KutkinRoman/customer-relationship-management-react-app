import {AUTH_API} from "./api";
import {IConversation} from "../model/conversation/Conversation";
import {ConversationMessage} from "../model/conversation/ConversationMessage";
import {EntityStatus} from "../types/types";

export class ConversationService {

    public static async getConversations() {
        return await AUTH_API.get<IConversation[]>('/api/v1/conversations')
    }

    public static async saveByMessage(data: any) {
        return await AUTH_API.post<ConversationMessage>('/api/v1/conversations/messages', data)
    }

    public static async updateMessageStatus(messageId: number, status: EntityStatus) {
        return await AUTH_API.patch<ConversationMessage>(`/api/v1/conversations/messages/${messageId}/${status}`)
    }

    public static async deleteMessage(messageId: number) {
        return await AUTH_API.delete(`/api/v1/conversations/messages/${messageId}`)
    }

}