import {DayOfWeek} from "../date/DaysOfWeek";
import {makeAutoObservable} from "mobx";

export class ConversationMessage {

    private readonly keyTime = '$_time'

    id: number | undefined;
    conversationId: number | undefined
    text: string | undefined
    sendingTime: string | undefined
    isOutMessage: boolean | undefined;
    daysOfWeek: DayOfWeek[] | undefined;
    coachingDirectionId: number | undefined;
    sessionIds: number[] | undefined
    isEdit: boolean
    isUpdate: boolean
    isLoading: boolean

    constructor(message: ConversationMessage | undefined) {
        this.id = message?.id;
        this.conversationId = message?.conversationId
        this.text = message?.text
        this.sendingTime = message?.sendingTime
        this.isOutMessage = message?.isOutMessage;
        this.daysOfWeek = message?.daysOfWeek;
        this.coachingDirectionId = message?.coachingDirectionId
        this.sessionIds = message?.sessionIds
        this.isEdit = false
        this.isLoading = false
        this.isUpdate = false
        makeAutoObservable(this)
    }

    setConversationId(conversationId: number) {
        this.conversationId = conversationId
    }

    setText(text: string) {
        this.text = text
        if (!this.text.includes(this.keyTime) && this.coachingDirectionId) {
            this.text = this.text + ' ' + this.keyTime + ' '
        }
        this.setIsEdit(true)
    }

    setDaysOfWeek(daysOfWeek: DayOfWeek[]) {
        this.daysOfWeek = daysOfWeek
        this.setIsEdit(true)
    }

    isDayOfWeek(dayOfWeek: DayOfWeek): boolean {
        return this.daysOfWeek !== undefined && this.daysOfWeek.includes(dayOfWeek)
    }

    setSendingTime(newValue: string | undefined) {
        this.sendingTime = newValue
        this.setIsEdit(true)
    }

    setCoachingDirectionId(id: number) {
        this.coachingDirectionId = id
        this.setSessionIds([])
        this.setIsEdit(true)
    }

    setSessionIds(sessionIds: number[]) {
        this.sessionIds = sessionIds
        this.setIsEdit(true)
    }

    setIsEdit(isEdit: boolean) {
        this.isEdit = isEdit
    }

    setIsUpdate(isUpdate: boolean) {
        this.isUpdate = isUpdate
    }

    setIsLoading(isLoading: boolean) {
        this.isLoading = isLoading
    }

    public checkedBySessionId(checked: boolean, sessionId: number) {
        if (checked) {
            this.addSessionId(sessionId)
        } else {
            this.removeSessionId(sessionId)
        }
    }

    private addSessionId(sessionId: number) {
        this.setSessionIds(
            this.sessionIds
                ? [...this.sessionIds, sessionId]
                : [sessionId]
        )
    }

    private removeSessionId(sessionId: number) {
        this.setSessionIds(
            this.sessionIds
                ? this.sessionIds.filter(id => id !== sessionId)
                : []
        )
    }

    update(message: ConversationMessage) {
        this.id = message.id;
        this.text = message.text
        this.sendingTime = message.sendingTime
        this.isOutMessage = message.isOutMessage;
        this.daysOfWeek = message.daysOfWeek;
        this.coachingDirectionId = message.coachingDirectionId
        this.sessionIds = message.sessionIds
        this.isEdit = false
        this.setIsUpdate(true)
    }
}
