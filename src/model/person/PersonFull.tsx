import {IPersonInfo, PersonInfo} from "./PersonInfo";
import {Person} from "./Person";
import {makeObservable, observable} from "mobx";

export class PersonFull extends Person {

    id: number;
    isCoach: boolean;
    isEmployee: boolean;
    isCustomer: boolean;
    info: IPersonInfo;

    constructor(personFull: PersonFull) {
        super(personFull)
        this.id = personFull.id;
        this.isCoach = personFull.isCoach
        this.isEmployee = personFull.isEmployee
        this.isCustomer = personFull.isCustomer
        this.info = new PersonInfo(personFull.info);
        makeObservable(this, {
            id: observable,
            isCoach: observable,
            isEmployee: observable,
            isCustomer: observable,
            info: observable
        })
    }

    update(person: PersonFull) {
        super.update(person)
        this.id = person.id;
        this.isCoach = person.isCoach
        this.isEmployee = person.isEmployee
        this.isCustomer = person.isCustomer
        this.info.update(person.info)
    }

}