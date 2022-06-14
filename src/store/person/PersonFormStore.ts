import {PersonFull} from "../../model/person/PersonFull";
import {makeAutoObservable} from "mobx";

export class PersonFormStore {

    person: PersonFull | undefined
    isNew: boolean

    constructor() {
        this.isNew = false
        makeAutoObservable(this)
    }

    setPerson(person: PersonFull | undefined) {
        this.person = person;
    }

    setIsNew(isNew: boolean) {
        this.isNew = isNew
    }


}