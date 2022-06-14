import {FetchDataStore} from "../FetchDataStore";
import {ICoachingDirection} from "../../model/coach/CoachingDirection";
import {CoachingService} from "../../service/CoachingService";
import {action, makeObservable, observable} from "mobx";

export class CoachingDirectionStore extends FetchDataStore<ICoachingDirection[]> {

    currentDirectionId?: number

    constructor() {
        super(null, CoachingService.getCoachingDirections);
        makeObservable(this, {
            currentDirectionId: observable,
            setCurrentDirectionById: action
        })
    }

    setCurrentDirectionById(directionId: number | undefined) {
        this.currentDirectionId = directionId
    }

}