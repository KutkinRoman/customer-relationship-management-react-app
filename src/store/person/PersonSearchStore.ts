import {FetchDataStore} from "../FetchDataStore";
import {PersonService} from "../../service/PersonService";
import {action, makeObservable, observable} from "mobx";
import {PersonResultSearch} from "../../model/person/PersonResultSearch";

export class PersonSearchStore extends FetchDataStore<PersonResultSearch[]> {

    query: string

    constructor() {
        super([], () => PersonService.search(this.query));
        this.query = '';
        makeObservable(this, {
            query: observable,
            setQuery: action,
        })
    }

    setQuery(query: string) {
        this.query = query
    }

    async fetch(): Promise<void> {
        if (this.query.length >= 2) {
            super.fetch()
        } else {
            this.setData([])
        }
    }
}