import {Person} from "../person/Person";

export class Customer extends Person {
    id: number

    constructor(customer: Customer) {
        super(customer);
        this.id = customer.id;
    }
}