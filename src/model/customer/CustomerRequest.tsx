import {CustomerRequestEvent} from "./CustomerRequestEvent";
import {Coach} from "../coach/Coach";
import {ICustomerRequestHistory} from "./CustomerRequestHistory";
import {ICoachingDirection} from "../coach/CoachingDirection";
import {PersonFull} from "../person/PersonFull";
import {makeAutoObservable} from "mobx";

export interface ICustomerRequest {
    id: number;
    formId: number;
    planDateTime?: Date;
    callDateTime?: Date;
    currentStatus: CustomerRequestEvent;
    createDateTime?: Date;
    info?: string;
    person: PersonFull;
    coach?: Coach;
    coachingDirection?: ICoachingDirection
    histories: ICustomerRequestHistory[]

    update(customerRequest: ICustomerRequest): void
}

export class CustomerRequest implements ICustomerRequest {
    id: number;
    formId: number;
    planDateTime?: Date;
    callDateTime?: Date;
    currentStatus: CustomerRequestEvent;
    createDateTime?: Date;
    info?: string;
    person: PersonFull;
    coach?: Coach;
    coachingDirection?: ICoachingDirection
    histories: ICustomerRequestHistory[]

    constructor(customerRequest: ICustomerRequest) {
        this.id = customerRequest.id;
        this.formId = customerRequest.formId;
        this.planDateTime = customerRequest.planDateTime;
        this.callDateTime = customerRequest.callDateTime;
        this.currentStatus = customerRequest.currentStatus;
        this.createDateTime = customerRequest.createDateTime;
        this.info = customerRequest.info;
        this.person = new PersonFull(customerRequest.person)
        this.coach = customerRequest.coach;
        this.coachingDirection = customerRequest.coachingDirection
        this.histories = customerRequest.histories;
        makeAutoObservable(this)
    }

    update(customerRequest: ICustomerRequest): void {
        this.planDateTime = customerRequest.planDateTime;
        this.callDateTime = customerRequest.callDateTime;
        this.currentStatus = customerRequest.currentStatus;
        this.info = customerRequest.info;
        this.coach = customerRequest.coach;
        this.coachingDirection = customerRequest.coachingDirection
        this.histories = customerRequest.histories;
    }

}
