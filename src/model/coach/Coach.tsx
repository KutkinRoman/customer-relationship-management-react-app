import {Person} from "../person/Person";

export class Coach extends Person {
    id: number;

    constructor(coach: Coach) {
        super(coach)
        this.id = coach.id
    }

}