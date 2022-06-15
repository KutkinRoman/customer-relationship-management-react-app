import {ICoachingDirection} from "./CoachingDirection";
import {Coach} from "./Coach";
import {makeAutoObservable} from "mobx";

export interface ICoachingSession {
    id?: number;
    dateTime?: string;
    date?: string;
    time?: string;
    duration?: string;
    direction: ICoachingDirection;
    coach?: Coach;
}

export class CoachingSession implements ICoachingSession {

    id?: number;
    dateTime: string;
    date?: string;
    time?: string;
    duration?: string;
    direction: ICoachingDirection;
    coach?: Coach;

    constructor(dateTime: string, direction: ICoachingDirection) {
        this.dateTime = dateTime;
        this.direction = direction;
    }
}