import {ICoach} from "./Coach";
import {ICoachingOrder} from "../order/CoachingOrder";

export interface ICoachTransaction {

    id: number;
    date: string;
    time: string;
    type: string;
    title: string;
    sumStart: number;
    sum: number;
    sumEnd: number;
    coach: ICoach;
    order?: ICoachingOrder
}