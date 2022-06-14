import {CustomerRequestEvent} from "./CustomerRequestEvent";

export interface ICustomerRequestHistory {
    id: number;
    dateTime: string;
    event: CustomerRequestEvent;
}
