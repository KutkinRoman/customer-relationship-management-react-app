import {Coach} from "./Coach";

export class CoachFull extends Coach {
    balance: number;
    sum: number

    constructor(coach: CoachFull) {
        super(coach);
        this.balance = coach.balance;
        this.sum = coach.sum
    }

    setBalance(balance: number) {
        this.balance = balance
    }
}

