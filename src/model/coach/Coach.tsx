import {IPerson, Person} from "../person/Person";

export interface ICoach extends IPerson {
    id: number;
}

export class Coach extends Person {
    id: number;

    constructor(coach: Coach) {
        super(coach)
        this.id = coach.id
    }

}