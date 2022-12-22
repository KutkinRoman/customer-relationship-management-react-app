import {ICustomer} from "../customer/Customer";

export interface ICoachingOrder {
    id: number
    title: string
    customers: ICustomer[]
}