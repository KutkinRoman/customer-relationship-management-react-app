import {IPerson, Person} from "../person/Person";

export interface ICustomer extends IPerson {
    id: number
}

export class Customer extends Person {
    id: number

    constructor(customer: Customer) {
        super(customer);
        this.id = customer.id;
    }
}