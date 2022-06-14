import {FetchDataStore} from "../FetchDataStore";
import {PersonService} from "../../service/PersonService";
import {PersonFull} from "../../model/person/PersonFull";

export class PersonStore extends FetchDataStore<PersonFull> {

    personId: number | undefined

    constructor() {
        super(null, () => PersonService.getPersonById(this.personId));
    }

    setPersonId(personId: number) {
        this.personId = personId
    }

    setData(person: PersonFull) {
        super.setData(new PersonFull(person));
    }
}