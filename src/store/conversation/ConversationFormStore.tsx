import {IConversation} from "../../model/conversation/Conversation";
import {makeAutoObservable} from "mobx";
import {ConversationMessage} from "../../model/conversation/ConversationMessage";
import {DayOfWeek} from "../../model/date/DaysOfWeek";
import {ConversationService} from "../../service/ConversationService";
import {EntityStatus} from "../../types/types";

export class ConversationFormStore {

    conversation: IConversation | undefined

    constructor() {
        makeAutoObservable(this)
    }

    public setConversation(conversation: IConversation) {
        this.conversation = conversation
    }

    public createNewMessage() {
        if (this.conversation) {
            const message = new ConversationMessage(undefined);
            message.setConversationId(this.conversation.id)
            this.conversation.setMessages([...this.conversation.messages, message])
        }
    }

    public checkedDayOfWeekByMessage(checked: boolean, message: ConversationMessage, day: DayOfWeek) {
        if (checked) {
            message.setDaysOfWeek([...message.daysOfWeek || [], day])
        } else {
            message.setDaysOfWeek([...message.daysOfWeek?.filter(d => d !== day) || []])
        }
    }

    public async saveMessage(message: ConversationMessage): Promise<void> {
        if (this.conversation) {
            message.setIsLoading(true)
            try {
                const response = await ConversationService.saveByMessage({...message})
                message.update(response.data)
            } finally {
                message.setIsLoading(false)
            }
        }
    }

    public async updateStatus(message: ConversationMessage, status: EntityStatus): Promise<void> {
        if (this.conversation && message.id) {
            message.setIsLoading(true)
            try {
                const response = await ConversationService.updateMessageStatus(message.id, status)
                message.update(response.data)
            } finally {
                message.setIsLoading(false)
            }
        }
    }

    public async deleteMessage(message: ConversationMessage): Promise<void> {
        if (this.conversation && message.id) {
            message.setIsLoading(true)
            try {
                await ConversationService.deleteMessage(message.id)
                this.conversation.setMessages(this.conversation.messages.filter(msg => msg.id !== message.id))
            } finally {
                message.setIsLoading(false)
            }
        }
    }
}