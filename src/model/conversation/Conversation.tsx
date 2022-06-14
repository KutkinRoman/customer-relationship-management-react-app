import {makeAutoObservable} from "mobx";
import {ConversationMessage} from "./ConversationMessage";

export interface IConversation {
    id: number;
    peerId: number;
    groupId: number;
    groupTitle: string;
    conversationTitle: string;
    isUnavailable: boolean;
    isOutMessages: boolean;
    messages: ConversationMessage[];

    setMessages: (messages: ConversationMessage[]) => void
}

export class Conversation implements IConversation {

    id: number;
    peerId: number;
    groupId: number;
    groupTitle: string;
    conversationTitle: string;
    isUnavailable: boolean;
    isOutMessages: boolean;
    messages: ConversationMessage[];

    constructor(conversation: IConversation) {
        this.id = conversation.id;
        this.peerId = conversation.peerId;
        this.groupId = conversation.groupId;
        this.groupTitle = conversation.groupTitle;
        this.conversationTitle = conversation.conversationTitle;
        this.isUnavailable = conversation.isUnavailable;
        this.isOutMessages = conversation.isOutMessages;
        this.messages = conversation.messages.map(msg => new ConversationMessage(msg));
        makeAutoObservable(this)
    }

    setMessages(messages: ConversationMessage[]) {
        this.messages = messages
    }

}