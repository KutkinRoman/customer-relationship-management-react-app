import {PersonStore} from "./person/PersonStore";

export class RegistrationStore {
    personId: number | undefined
    personStore: PersonStore
    isInit: boolean

    constructor() {
        this.isInit = false;
        this.personStore = new PersonStore()
    }

    initPersonById(personId: number) {
        this.isInit = true
        this.personId = personId
        this.personStore.setPersonId(this.personId)
        this.personStore.fetch()
    }
}