import {Person} from "./Person";

export class PersonResultSearch extends Person {

    readonly id: number

    constructor(personResultSearch: PersonResultSearch) {
        super(personResultSearch);
        this.id = personResultSearch.id
    }
}