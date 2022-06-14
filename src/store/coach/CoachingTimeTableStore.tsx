import {makeAutoObservable} from "mobx";
import {ConversationMessage} from "../../model/conversation/ConversationMessage";
import {ICoachingSession} from "../../model/coach/CoachingSession";
import dayjs from "dayjs";

export class CoachingTimeTableStore {

    currentDay?: dayjs.Dayjs
    sessions?: ICoachingSession[]
    message?: ConversationMessage

    constructor() {
        makeAutoObservable(this)
    }

    setCurrentDay(day: dayjs.Dayjs) {
        this.currentDay = day
    }

    setSessions(sessions?: ICoachingSession[]) {
        this.sessions = sessions
    }

    setMessage(message?: ConversationMessage) {
        this.message = message
    }


}