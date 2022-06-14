import {ICoachingDirection} from "./CoachingDirection";
import {Coach} from "./Coach";
import {makeAutoObservable} from "mobx";

export interface ICoachingSession {
    id: number;
    dateTime: string;
    date: string;
    time: string;
    duration: string;
    direction: ICoachingDirection;
    coach: Coach;
}

export class CoachingSession implements ICoachingSession {
    id: number;
    dateTime: string;
    duration: string;
    date: string;
    time: string;
    direction: ICoachingDirection;
    coach: Coach;

    constructor(session: ICoachingSession) {
        this.id = session.id;
        this.dateTime = session.dateTime;
        this.date = session.date
        this.time = session.time
        this.duration = session.duration;
        this.direction = session.direction;
        this.coach = session.coach;
        makeAutoObservable(this)
    }
}