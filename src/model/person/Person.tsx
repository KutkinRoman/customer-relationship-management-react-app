import {action, makeObservable, observable} from "mobx";

export interface IPerson {
    firstName: string | undefined;
    lastName: string | undefined;
    middleName: string | undefined;
    fullName: string | undefined;
    compactName: string | undefined;
}

export class Person implements IPerson {
    firstName: string | undefined;
    lastName: string | undefined;
    middleName: string | undefined;
    fullName: string | undefined;
    compactName: string | undefined;

    constructor(person: IPerson) {
        this.firstName = person.firstName;
        this.lastName = person.lastName;
        this.middleName = person.middleName;
        this.fullName = person.fullName;
        this.compactName = person.compactName;
        makeObservable(this, {
            firstName: observable,
            lastName: observable,
            middleName: observable,
            fullName: observable,
            compactName: observable,
            update: action
        })
    }

    update(person: IPerson){
        this.firstName = person.firstName;
        this.lastName = person.lastName;
        this.middleName = person.middleName;
        this.fullName = person.fullName;
        this.compactName = person.compactName;
    }
}

