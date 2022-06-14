import {makeAutoObservable} from "mobx";
import {ConversationMessage} from "../../model/conversation/ConversationMessage";

export class CoachingTimeTableStore {

    message?: ConversationMessage

    constructor() {
        makeAutoObservable(this)
    }

    setMessage(message?: ConversationMessage) {
        this.message = message
    }
}