import {FetchDataStore} from "../FetchDataStore";
import {CoachService} from "../../service/CoachService";
import {action, makeObservable, observable} from "mobx";
import {CoachFull} from "../../model/coach/CoachFull";
import {Coach} from "../../model/coach/Coach";

export class CoachStore extends FetchDataStore<Coach[]> {

    currentCoach: Coach | undefined

    constructor() {
        super([], CoachService.getCoachList);
        makeObservable(this, {
            currentCoach: observable,
            setCurrentCoach: action
        })
    }

    setData(coachArray: CoachFull[]) {
        super.setData(coachArray.map(coach => new CoachFull(coach)));
    }

    setCurrentCoach(coach: CoachFull) {
        this.currentCoach = coach
    }
}